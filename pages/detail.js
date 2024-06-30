function detail(blogId) {
    const blog = blogsAPI.findById(blogId);

    if (!blog) {
        console.error(`Blog with ID ${blogId} not found.`);
        return;
    }

    const detailThumbnail = document.createElement("img");
    detailThumbnail.className = "img-fluid object-fit-cover mb-4";
    detailThumbnail.style = "height: 200px; width: 100%;"
    detailThumbnail.setAttribute("src", `${blog.thumbnail}`)

    const detailContainer = document.createElement("div");
    detailContainer.className = "container";

    const detailPageTitle = document.createElement("h1");
    detailPageTitle.textContent = blog.title;

    const chapterDetailContent = document.createElement("div");
    chapterDetailContent.innerHTML = blog.content;

    const detailGoToNextBlog = document.createElement("button");
    detailGoToNextBlog.className = "btn btn-outline-primary"
    detailGoToNextBlog.innerHTML = `Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg>`;
    const totalBlogs = blogsAPI.countByTitle("", 0);
    detailGoToNextBlog.addEventListener("click", () => navigateTo("detail", Math.min(blog.id + 1, totalBlogs)));
    if (blog.id === totalBlogs) {
        detailGoToNextBlog.disabled = true;
    }

    const detailGoToPrevBlog = document.createElement("button");
    detailGoToPrevBlog.className = "btn btn-outline-primary"
    detailGoToPrevBlog.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path></svg>Previous`;
    detailGoToPrevBlog.addEventListener("click", () => navigateTo("detail", Math.max(blog.id - 1, 1)));
    if (blog.id === 1) {
        detailGoToPrevBlog.disabled = true;
    }

    const detailGoToHome = document.createElement("button");
    detailGoToHome.className = "btn btn-primary"
    detailGoToHome.textContent = "go home"
    detailGoToHome.addEventListener("click", () => navigateTo("home"));

    const detailButtonContainer = document.createElement("div");
    detailButtonContainer.setAttribute("role", "group");
    detailButtonContainer.setAttribute("aria-label", "Posts navigation");
    detailButtonContainer.className = "btn-group py-4";
    
    detailContainer.appendChild(detailThumbnail);
    detailContainer.appendChild(detailPageTitle);
    detailContainer.appendChild(chapterDetailContent);
    detailButtonContainer.appendChild(detailGoToPrevBlog);
    detailButtonContainer.appendChild(detailGoToHome);
    detailButtonContainer.appendChild(detailGoToNextBlog);
    detailContainer.appendChild(detailButtonContainer);
    mainElement.appendChild(detailContainer);

    // Highlight code snippet.
    hljs.highlightAll();
};