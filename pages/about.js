function about() {
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "container";

    const aboutPageTitle = document.createElement("h1");
    aboutPageTitle.textContent = "About";

    const aboutOpeningParagraphElement = document.createElement("p");
    aboutOpeningParagraphElement.innerHTML = `I am Clifford William. I am a software engineer living in Indonesia, Bandung. I hve been building offline and online softwares using Python, JavaScript (mostly TypeScript) and some C++. I like to work both in the front-end and back-end side of things when it comes to web development. As a hobby I like to build games and read books after work.`;

    const aboutInnerParagraph1Element = document.createElement("p");
    aboutInnerParagraph1Element.innerHTML = `I work as a full-stack developer, after work I like to either work on my game, read a book or write my full-stack text book in my other blog-like book that I also host on GitHub pages like this one. When my brain is tired I like to draw and work on my game project assets (there is so much to draw for my game assets).`;

    const aboutInnerParagraph2Element = document.createElement("p");
    aboutInnerParagraph2Element.innerHTML = `I do not ever leave my room after work, I only do so when I really have to. Otherwise I will be in my goblin cave.`;

    const aboutInnerParagraph3Element = document.createElement("p");
    aboutInnerParagraph3Element.innerHTML = `Feel free to contact me if you want to get in touch.`;
    
    aboutContainer.appendChild(aboutPageTitle);
    aboutContainer.appendChild(aboutOpeningParagraphElement);
    aboutContainer.appendChild(aboutInnerParagraph1Element);
    aboutContainer.appendChild(aboutInnerParagraph2Element);
    aboutContainer.appendChild(aboutInnerParagraph3Element);
    mainElement.appendChild(aboutContainer);
}
