let currentLayout = "";

function setLayout(layout) {
    // Exit if same layout.
    if (layout == currentLayout) {
        return;
    };

    // Update current layout.
    currentLayout = layout;
    
    // Clear existing layout content.
    navElement.innerHTML = '';

    // Set new layout.
    switch (layout) {
        case "normal":
            normal();
            footer();
            break;
        default:
            console.error(`Unknown layout: ${layout}`);
            break;
    };
};