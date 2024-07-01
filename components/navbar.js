function navbar() {
  // Sun
  const sunInnerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16"><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"></path></svg>`;
  
  // Moon
  const moonInnerHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16"><path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path></svg>`;

  // Get navElement.
  const navElement = document.getElementById("nav");

  // Set navElement class.
  navElement.className = "navbar bg-body-tertiary";

  // Set navElement innerHTML.
  navElement.innerHTML = `<div class="container"><a class="navbar-brand" href="#">Cliffords blog</a><button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"><div class="offcanvas-header"><h5 class="offcanvas-title" id="offcanvasNavbarLabel">Pages</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><button type="button" class="btn btn-primary" id="theme-toggle-btn"></button><ul id="nav-ul" class="navbar-nav justify-content-end flex-grow-1 pe-3"></ul></div></div></div>`;
  
  // Get navElement ul.
  const navElementUl = document.getElementById("nav-ul");

  // Get theme button.
  const navThemeButtonElement = document.getElementById("theme-toggle-btn");

  // Init toggler text.
  onThemeTogglerClicked()

  // Subscribe to click event.
  navThemeButtonElement.addEventListener('click', () => {
    onThemeTogglerClicked()
  });
    
  // Set buttons.
  const buttons = [
      { name: "Home", target: "home" },
      { name: "About", target: "about" },
  ];
  
  // Populate it with buttons.
  buttons.forEach(button => {
    // Get button meta.
    const {name: buttonName, target: buttonTarget} = button;

    // Create li element.
    const liElement = document.createElement("li");
    liElement.className = "nav-item";

    // Create button element.
    const buttonElement = document.createElement("button");
    buttonElement.textContent = buttonName;

    // Set button active meta.
    if (currentPage === buttonTarget) {
      buttonElement.className = "nav-link active";
      buttonElement.setAttribute("aria-current", "page");
    } else {
      buttonElement.className = "nav-link";
    }

    // Set button meta.
    buttonElement.setAttribute("type", "button");
    buttonElement.setAttribute("data-bs-dismiss", "offcanvas");
    buttonElement.setAttribute("aria-label", "Close");

    // Define button event callback.
    buttonElement.addEventListener("click", (event) => {
      if (currentPage === button.target) {
        // Same page click guard.
        return
      } else {
        // Get clicked button.
        const clickedButton = event.target

        // Update current page.
        currentPage = buttonTarget;

        // Iterate all buttons.
        for (let i = 0; i < navElementUl.children.length; i++) {
          let thisLiElement = navElementUl.children[i];
          thisButton = thisLiElement.firstChild;
          // Reset all button.
          thisButton.className = "nav-link";
          thisButton.removeAttribute('aria-current');
        }

        // Set clicked button meta.
        clickedButton.className = "nav-link active";
        clickedButton.setAttribute("aria-current", "page");

        // Change page.
        navigateTo(buttonTarget);
      };
    });

    // Add button to list, then list to ul.
    liElement.appendChild(buttonElement);
    navElementUl.appendChild(liElement);
  });

  function onThemeTogglerClicked() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    navThemeButtonElement.innerHTML = currentTheme !== 'dark' ? `${sunInnerHtml} Light mode` : `${moonInnerHtml} Dark mode`;
    navThemeButtonElement.className = currentTheme !== 'dark' ? 'btn btn-light' : 'btn btn-dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    currentTheme === 'dark' ? highlightjsSetLightCss() : highlightjsSetDarkCss();
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
  }
};