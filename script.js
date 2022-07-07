function modify () {
    var theme = document.getElementById("pink");
    var remove = document.getElementById("button-theme");
    var img = document.getElementById("img-moon")

    if(theme.id == "pink") {
        theme.id = "dark-pink";
        remove.removeAttribute("onclick");
        img.removeAttribute("src")

        remove.setAttribute("onclick", "theme_dark()");
        img.setAttribute("src", "images/light.svg");

    }

}

function theme_dark () {

    var themeDark = document.getElementById("dark-pink");
    var remove = document.getElementById("button-theme");
    var img = document.getElementById("img-moon")


    if(themeDark.id == "dark-pink") {
        themeDark.id = "pink";
        remove.removeAttribute("onclick");
        img.removeAttribute("src")


        remove.setAttribute("onclick", "modify()");
        img.setAttribute("src", "images/dark.svg");

    }

}