document.addEventListener("DOMContentLoaded", () => {
  const postContent = document.getElementById("post-content");
  const tocList = document.getElementById("toc-list");
  const toc = document.getElementById("table-of-contents");
  const backToTop = document.getElementById("back-to-top");

  // Apply Bootstrap components and utilities to generated Markdown.
  postContent.querySelectorAll("h1, h2, h3, h4").forEach((heading) => {
    heading.classList.add("mt-5", "mb-3");
  });

  postContent.querySelectorAll("img").forEach((image) => {
    image.classList.add("img-fluid", "rounded", "d-block", "mx-auto", "my-4");
  });

  postContent.querySelectorAll("table").forEach((table) => {
    table.classList.add(
      "table",
      "table-bordered",
      "table-striped",
      "align-middle",
      "mb-0"
    );

    const wrapper = document.createElement("div");
    wrapper.classList.add("table-responsive", "my-4");
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  postContent.querySelectorAll("blockquote").forEach((quote) => {
    quote.classList.add(
      "border-start",
      "border-primary",
      "border-4",
      "ps-3",
      "py-1",
      "my-4",
      "text-body-secondary"
    );
    quote.lastElementChild?.classList.add("mb-0");
  });

  postContent.querySelectorAll("pre").forEach((codeBlock) => {
    codeBlock.classList.add("bg-body-tertiary", "border", "rounded", "p-3", "overflow-auto");
  });

  postContent.querySelectorAll("hr").forEach((rule) => {
    rule.classList.add("my-4");
  });

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

    listItem.classList.add("mb-2");
    link.classList.add(
      "link-body-emphasis",
      "link-underline-opacity-0",
      "link-underline-opacity-75-hover"
    );

    if (heading.tagName === "H3") listItem.classList.add("ms-4", "small");

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
    toc.hidden = true;
  }

  // show/hide back-to-top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.remove("d-none");
    } else {
      backToTop.classList.add("d-none");
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
