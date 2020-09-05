


(async function () {
    try {
       
        document.querySelector(".navbar-burger")
            .addEventListener("click", () => {
                alert("ssss");
                document.querySelector(".navbarBasicExample").toggle.classList("menu-show");
            });

    }
    catch (rejectedValue) {
        // …
    }
})()