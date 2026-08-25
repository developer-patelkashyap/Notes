document.addEventListener("DOMContentLoaded", () => {
  const postContent = document.getElementById("post-content");
  const tocList = document.getElementById("toc-list");
  const toc = document.getElementById("table-of-contents");
  const backToTop = document.getElementById("back-to-top");

  // generate table of contents
  const headings = postContent.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    // create id if heading does not already have one
    if (!heading.id) {
      heading.id = heading.textContent
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      // fallback for headings that produce empty ids
      if (!heading.id) {
        heading.id = `section-${index + 1}`;
      }
    }

    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    if (heading.tagName === "H3") {
      listItem.classList.add("toc-subheading");
    }

    link.addEventListener("click", (event) => {
      event.preventDefault();

      heading.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState(null, "", `#${heading.id}`);
    });

    listItem.appendChild(link);
    tocList.appendChild(listItem);
  });

  // hide toc when there are no headings
  if (headings.length === 0) {
    toc.style.display = "none";
  }

  // show/hide back-to-top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // scroll to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
