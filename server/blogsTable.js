// https://stockcake.com/
const blogsTable = [
        // O
        {
                "id": 1,
                // "thumbnail": "https://picsum.photos/286/180",
                "thumbnail": "./public/lake.webp",
                "thumbnailAlt": "A lake.",
                "title": "Hello",
                "description": "My first post.",
                "date": "Jun 6 2024",
                "tags": [
                        1, // web
                        2, // art
                        3, // games
                        4, // book
                ],
                "content": `
<p>
        This is my first blog post, I will be posting about web development and game development, I am not sure what else I will learn later on but I will also dump that here too.
</p>
<p>
        My next few posts will be dedicated to my current book that I am working on, it is a textbook about fullstack development. There will also be posts on my current game project called Gestalt Illusion that I will post here as well as a devlog.
</p>
<p>
        This blog was built by myself with the use of HTML, CSS and JavaScript only. The reason is that I want to keep it small and simple, just like any other markdown based static blog sites.
</p>
<pre><code>
function navbar() {
  // Get navElement.
  const navElement = document.getElementById("nav");

  // Set navElement class.
  navElement.className = "navbar bg-body-tertiary";
  
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
    navThemeButtonElement.className = currentTheme !== 'dark' ? 'btn btn-light' : 'btn btn-dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    currentTheme === 'dark' ? highlightjsSetLightCss() : highlightjsSetDarkCss();
    
    htmlElement.setAttribute('data-bs-theme', newTheme);
  }
};
</code></pre>
`
        },
];