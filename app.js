const express = require("express");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_URL = (process.env.SITE_URL || "").replace(/\/$/, "");
const POSTS_DIR = path.join(__dirname, "posts");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

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
    .sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));
}

app.get("/", (req, res) => {
  const posts = readPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  res.render("index", {
    posts,
    categories,
    pageTitle: "Kashyap's Notes",
    pageDescription: "Notes written in Markdown.",
    pageUrl: SITE_URL || "",
  });
});

app.get("/posts/:slug", (req, res) => {
  const post = readPosts().find((item) => item.slug === req.params.slug);

  if (!post) {
    return res.status(404).render("404", {
      pageTitle: "Page not found · Kashyap's Notes",
      pageDescription: "The requested post could not be found.",
      pageUrl: "",
    });
  }

  res.render("post", {
    post,
    pageTitle: `${post.title} · Kashyap's Notes`,
    pageDescription: post.description || "A note from Kashyap's Notes.",
    pageUrl: SITE_URL ? `${SITE_URL}/posts/${post.slug}` : "",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    pageTitle: "Page not found · Kashyap's Notes",
    pageDescription: "The requested page could not be found.",
    pageUrl: "",
  });
});

app.listen(PORT, () => {
  console.log(`Kashyap's Notes: http://localhost:${PORT}`);
});
