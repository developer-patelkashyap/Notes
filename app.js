import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = (process.env.SITE_URL || "").replace(/\/$/, "");
const POSTS_DIR = path.join(__dirname, "posts");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// protect latex from marked
marked.use({
  extensions: [
    {
      name: "displayMath",
      level: "block",

      start(src) {
        return src.indexOf("$$");
      },

      tokenizer(src) {
        const match = /^\$\$([\s\S]+?)\$\$(?:\n|$)/.exec(src);

        if (match) {
          return {
            type: "displayMath",
            raw: match[0],
            text: match[1],
          };
        }
      },

      renderer(token) {
        return `$$${token.text}$$`;
      },
    },

    {
      name: "inlineMath",
      level: "inline",

      start(src) {
        return src.indexOf("$");
      },

      tokenizer(src) {
        const match = /^\$([^$\n]+?)\$/.exec(src);

        if (match) {
          return {
            type: "inlineMath",
            raw: match[0],
            text: match[1],
          };
        }
      },

      renderer(token) {
        return `$${token.text}$`;
      },
    },
  ],
});

function readPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const source = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(source);

      const rawDate = data.date ? new Date(data.date) : null;

      const validDate =
        rawDate && !Number.isNaN(rawDate.getTime()) ? rawDate : null;

      return {
        slug: path.basename(file, ".md"),
        title: data.title || path.basename(file, ".md"),
        category: data.category || "Uncategorized",
        tags: Array.isArray(data.tags) ? data.tags : [],
        description: data.description || "",
        image: data.image || "",
        date: validDate,

        dateText: validDate
          ? validDate.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })
          : "",

        html: marked.parse(content),
      };
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        const dateDiff = b.date.getTime() - a.date.getTime();

        if (dateDiff === 0) {
          return a.title.localeCompare(b.title, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        }

        return dateDiff;
      }

      if (a.date) return -1;

      if (b.date) return 1;

      return a.title.localeCompare(b.title, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    });
}

app.get("/", (req, res) => {
  const posts = readPosts();
  const categories = [...new Set(posts.map((post) => post.category))]
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );

  res.render("index", {
    posts,
    categories,
    pageTitle: "Vyasa's Notes",
    pageDescription: "Notes written in Markdown.",
    pageUrl: SITE_URL || "",
  });
});

app.get("/posts/:slug", (req, res) => {
  const post = readPosts().find((item) => item.slug === req.params.slug);

  if (!post) {
    return res.status(404).render("404", {
      pageTitle: "Page not found · Vyasa's Notes",
      pageDescription: "The requested post could not be found.",
      pageUrl: "",
    });
  }

  res.render("post", {
    post,
    pageTitle: `${post.title} · Vyasa's Notes`,
    pageDescription: post.description || "A note from Vyasa's Notes.",
    pageUrl: SITE_URL ? `${SITE_URL}/posts/${post.slug}` : "",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    pageTitle: "Page not found · Vyasa's Notes",
    pageDescription: "The requested page could not be found.",
    pageUrl: "",
  });
});

app.listen(PORT, () => {
  console.log(`Vyasa's Notes: http://localhost:${PORT}`);
});
