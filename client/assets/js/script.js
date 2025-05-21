document.addEventListener("DOMContentLoaded", () => {
    
    const myTargetDiv = document.getElementById("nav-container");
    const body = document.body;
    const classToToggle = "active";

    function handleClickOutside(event) {
        if (
            !myTargetDiv.contains(event.target) &&
            event.target !== myTargetDiv
        ) {
            if (body.classList.contains(classToToggle)) {
                body.classList.remove(classToToggle);
                console.log(`Class '${classToToggle}' removed from body.`);
            }
        }
    }

    document.addEventListener("click", handleClickOutside);

    myTargetDiv.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    const hamburger = document.getElementById("hamburger");
    const hamburger2 = document.getElementById("close");

    hamburger.addEventListener("click", (event) => {
        body.classList.toggle(classToToggle);
        event.stopPropagation();
    });

    hamburger2.addEventListener("click", (event) => {
        body.classList.toggle(classToToggle);
        event.stopPropagation();
    });
});
