function home() {
    let homeBlogSearchString = "";
    let homeBlogTagId = 0;
    const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
    let homeBlogLimit = Math.min(5, homeTotalBlogs);
    let homeBlogOffset = 0;
    let homeBlogSortOrder = "DESC";

    const homeContainer = document.createElement("div");
    homeContainer.className = "container";

    const homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Home";

    const homeOpeningParagraphElement = document.createElement("p");
    homeOpeningParagraphElement.innerHTML = `Welcome, find the blog posts you want to read here.`;
    
    const homeFormContainer = document.createElement("form");
    homeFormContainer.innerHTML = `<div class="mb-3"><label for="homeInputSearch" class="form-label">Search blog posts by title</label><input class="form-control me-2" type="search" id="homeInputSearch" placeholder="Enter blog title to search" aria-label="Search"></div><div class="mb-3"><label for="homeInputLimit" class="form-label">Blog posts shown per page</label><input type="number" class="form-control" id="homeInputLimit"></div><div><label for="homeInputOrder" class="form-label">Order blog posts by date</label><select id="homeInputOrder" class="mb-3 form-select"><option value="DESC" selected="selected">Descending</option><option value="ASC">Ascending</option></select></div>
    <div><label for="homeInputTag" class="form-label">Filter by tags</label><select id="homeInputTag" class="mb-3 form-select"></select></div>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" id="homePrevPageButton">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeFirstPostButton">1</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeLeftLeftPostButton">1</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeLeftPostButton">1</a></li>
    <li class="page-item active" aria-current="page"><a id="homeCurrentPostButton" class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeRightPostButton">1</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeRightRightPostButton">1</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeLastPostButton">3</a></li>
    <li class="page-item"><a class="page-link" href="#" id="homeNextPageButton">Next</a></li>
  </ul>
</nav><p id="homeBlogPageInfo"></p>`;

    homeContainer.appendChild(homePageTitle);
    homeContainer.appendChild(homeOpeningParagraphElement);
    homeContainer.appendChild(homeFormContainer);
    mainElement.appendChild(homeContainer);

    const homeBlogTagDropdown = document.getElementById("homeInputTag");
    const allTags = tagsAPI.findAll();

    const optionTagElement = document.createElement("option");
    optionTagElement.setAttribute("value", 0);
    optionTagElement.innerHTML = "All";
    homeBlogTagDropdown.appendChild(optionTagElement);

    allTags.forEach(tag => {
        const {id: tagId, name: tagName} = tag;
        const optionTagElement = document.createElement("option");
        optionTagElement.setAttribute("value", tagId);
        optionTagElement.innerHTML = tagName;
        homeBlogTagDropdown.appendChild(optionTagElement);
    });
    homeBlogTagDropdown.addEventListener("change", (event) => { setHomeBlogTagId(event.target.value); });

    const homeBlogSearchInput = document.getElementById("homeInputSearch");
    homeBlogSearchInput.addEventListener("input", (event) => { setHomeBlogSearchString(event) });

    const homeBlogLimitInput = document.getElementById("homeInputLimit");
    homeBlogLimitInput.min = 1;
    homeBlogLimitInput.value = homeBlogLimit;
    homeBlogLimitInput.addEventListener("input", (event) => { setLimit(event) });

    const homeBlogSortDropdown = document.getElementById("homeInputOrder");
    homeBlogSortDropdown.addEventListener("change", (event) => { setSortOrder(event.target.value); });

    const homeNextPageButton = document.getElementById("homeNextPageButton");
    homeNextPageButton.addEventListener("click", (event) => {
        event.preventDefault();
        setHomeBlogOffset(homeBlogOffset + homeBlogLimit);
     });

    const homePrevPageButton = document.getElementById("homePrevPageButton");
    homePrevPageButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(Math.max(0, homeBlogOffset - homeBlogLimit));
    });

    const homeFirstPostButton = document.getElementById("homeFirstPostButton");
    homeFirstPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(0);
    });

    const homeLeftLeftPostButton = document.getElementById("homeLeftLeftPostButton");
    homeLeftLeftPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(Math.max(0, homeBlogOffset - (2 * homeBlogLimit)));
    });

    const homeLeftPostButton = document.getElementById("homeLeftPostButton");
    homeLeftPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(Math.max(0, homeBlogOffset - homeBlogLimit));
    });

    const homeRightPostButton = document.getElementById("homeRightPostButton");
    homeRightPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(homeBlogOffset + homeBlogLimit);
    });

    const homeRightRightPostButton = document.getElementById("homeRightRightPostButton");
    homeRightRightPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        setHomeBlogOffset(homeBlogOffset + (2 * homeBlogLimit));
    });

    const homeLastPostButton = document.getElementById("homeLastPostButton");
    homeLastPostButton.addEventListener("click", (event) => { 
        event.preventDefault();
        const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
        const maxOffset = Math.max(0, homeTotalBlogs - homeBlogLimit);
        setHomeBlogOffset(maxOffset);
    });

    const homeCurrentPostButton = document.getElementById("homeCurrentPostButton");

    fetchHomeBlogs();

    function setHomeBlogSearchString(event) {
        homeBlogSearchString = event.target.value.trim().toLowerCase();
        fetchHomeBlogs();
    }

    function setHomeBlogTagId(id) {
        homeBlogTagId = +id;
        fetchHomeBlogs();
    }

    function setHomeBlogOffset(newOffset) {
        const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
        const maxOffset = Math.max(0, homeTotalBlogs - homeBlogLimit);
        homeBlogOffset = Math.min(maxOffset, newOffset);
        fetchHomeBlogs();
    }

    function setLimit(event) {
        homeBlogOffset = 0;
        const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
        homeBlogLimit = Math.min(parseInt(event.target.value), homeTotalBlogs);
        fetchHomeBlogs();
    }

    function setSortOrder(order) {
        homeBlogSortOrder = order;
        fetchHomeBlogs();
    }

    function fetchHomeBlogs() {
        const filteredBlogs = blogsAPI.findByTitle(homeBlogSearchString, homeBlogTagId, homeBlogLimit, homeBlogOffset, homeBlogSortOrder);
        renderBlogs(filteredBlogs);
        updateHomeBlogPageInfo();
    }

    function renderBlogs(blogs) {
        let blogsContainer = document.getElementById("blogsContainer");
        if (blogsContainer) {
            mainElement.removeChild(blogsContainer);
        }

        let blogsContainerErrorMessage = document.getElementById("blogsContainerErrorMessage");
        if (blogsContainerErrorMessage) {
            mainElement.removeChild(blogsContainerErrorMessage);
        }

        if (!blogs || blogs.length === 0) {
            const blogsContainerErrorMessage = document.createElement("p");
            blogsContainerErrorMessage.setAttribute("id", "blogsContainerErrorMessage");
            blogsContainerErrorMessage.textContent = "No blogs available.";
            mainElement.appendChild(blogsContainerErrorMessage);
        } else {
            const blogsContainer = blogsList(blogs);
            blogsContainer.setAttribute("id", "blogsContainer");
            mainElement.appendChild(blogsContainer);
        }

        const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
        homePrevPageButton.parentElement.className = homeBlogOffset === 0 ? "page-item disabled" : "page-item";
        homeNextPageButton.parentElement.className = homeBlogOffset + homeBlogLimit >= homeTotalBlogs ? "page-item disabled" : "page-item";
    }

    function updateHomeBlogPageInfo() {
        const homeTotalBlogs = blogsAPI.countByTitle(homeBlogSearchString, homeBlogTagId);
        const totalPages = Math.ceil(homeTotalBlogs / homeBlogLimit);
        const currentPage = Math.ceil(homeBlogOffset / homeBlogLimit) + 1;
    
        const homeBlogPageInfo = document.getElementById("homeBlogPageInfo");
    
        // Check for NaN or undefined in currentPage and totalPages
        const displayCurrentPage = isNaN(currentPage) ? 1 : currentPage;
        const displayTotalPages = isNaN(totalPages) ? 1 : totalPages;
    
        homeBlogPageInfo.textContent = `Page ${displayCurrentPage} of ${displayTotalPages}`;

        // Update middle pagination buttons.
        homeCurrentPostButton.innerHTML = displayCurrentPage;
        homeLastPostButton.innerHTML = displayTotalPages;
        homeLeftPostButton.innerHTML = displayCurrentPage - 1;
        homeLeftLeftPostButton.innerHTML = displayCurrentPage - 2;
        homeRightPostButton.innerHTML = displayCurrentPage + 1;
        homeRightRightPostButton.innerHTML = displayCurrentPage + 2;
        // Update right right pagination buttons.
        if (displayCurrentPage + 2 >= displayTotalPages) {
            homeRightRightPostButton.classList.add("visually-hidden");
        } else {
            homeRightRightPostButton.classList.remove("visually-hidden");
        };
        // Update right pagination buttons.
        if (displayCurrentPage + 1 >= displayTotalPages) {
            homeRightPostButton.classList.add("visually-hidden");
        } else {
            homeRightPostButton.classList.remove("visually-hidden");
        };
        // Update left pagination buttons.
        if (displayCurrentPage - 1 < 2) {
            homeLeftPostButton.classList.add("visually-hidden");
        } else {
            homeLeftPostButton.classList.remove("visually-hidden");
        };
        // Update left left pagination buttons.
        if (displayCurrentPage - 2 < 2) {
            homeLeftLeftPostButton.classList.add("visually-hidden");
        } else {
            homeLeftLeftPostButton.classList.remove("visually-hidden");
        };
        // Update most left pagination buttons.
        if (displayCurrentPage === 1) {
            homeFirstPostButton.classList.add("visually-hidden");
        } else {
            homeFirstPostButton.classList.remove("visually-hidden");
        };
        // Update most right pagination buttons.
        if (displayCurrentPage === displayTotalPages) {
            homeLastPostButton.classList.add("visually-hidden");
        } else {
            homeLastPostButton.classList.remove("visually-hidden");
        };
    }
}
