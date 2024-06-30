function footer() {
    // Get footerElement.
    const footerElement = document.getElementById("footer");

    // Set footerElement class.
    footerElement.className = "container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top";

    // Get the current year dynamically.
    const currentYear = new Date().getFullYear();

    // Set footerElement innerHTML with the dynamic year.
    footerElement.innerHTML = `<p class="col-md-4 mb-0 text-body-secondary">A blog by Clifford William, a fullstack developer. </br> <a href="https://github.com/cliffordwilliam">GitHub Profile</a> <br/> © ${currentYear} Clifford William</p>`;
}
