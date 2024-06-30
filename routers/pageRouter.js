function navigateTo(page, prop) {
    // Clear main element.
    mainElement.innerHTML = '';

    // Navigate to the requested page.
    switch (page) {
        case "home":
            setLayout("normal");
            home();
            break;
        case "about":
            setLayout("normal");
            about();
            break;
        case "detail":
            if (typeof prop === 'number') {
                setLayout("normal");
                detail(prop);
            } else {
                console.error(`Invalid prop (${prop}) for page 'detail'.`);
            }
            break;
        default:
            console.error(`Unknown page: ${page}`);
            break;
    };
};