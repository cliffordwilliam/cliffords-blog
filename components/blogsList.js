function blogsList(blogs) {
    const blogsContainer = document.createElement("div");
    blogsContainer.className = "container";
    const blogsGridContainer = document.createElement("div");
    blogsGridContainer.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";

    blogs.forEach(blog => {
        const blogElement = document.createElement("button");
        blogElement.className = "col btn text-start";
        let blogElementInnerHtml = `<div class="card shadow-sm"><img src="${blog.thumbnail}" class="card-img-top" alt="${blog.thumbnailAlt}"><div class="card-body"><h5 class="card-title">${blog.title}</h5><p class="card-text">${blog.description}</p><p class="card-text"><small class="text-body-secondary">${blog.date}</small></p></div><ul class="list-group list-group-flush">`;

        // Populate the badge
        blog.tags.forEach(tagFK => {
            const {name: tagName} = tagsAPI.findById(tagFK);
            blogElementInnerHtml += `<li class="list-group-item">${tagName}</li>`;
        });
        blogElementInnerHtml += `</ul>`;
        blogElement.innerHTML = blogElementInnerHtml;

        blogElement.addEventListener("click", () => navigateTo("detail", blog.id));

        blogsGridContainer.appendChild(blogElement);
        blogsContainer.appendChild(blogsGridContainer);
    });

    return blogsContainer;
}