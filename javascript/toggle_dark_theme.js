let darkThemeEnabled = 0

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (darkThemeEnabled === 0) setTheme();
});

document.addEventListener("DOMContentLoaded", e => {setTheme()})

function setTheme(){
    if (localStorage.getItem("userAccepted"))loadThemePreference();

    if(darkThemeEnabled === 2){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.getElementById("title_banner").classList.add("dark");
        document.getElementById("title_banner").classList.remove("light");
        document.getElementById("theme_icon").src = "/images/dark_mode.webp";
    } else if (darkThemeEnabled === 1) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("title_banner").classList.add("light");
        document.getElementById("title_banner").classList.remove("dark");
        document.getElementById("theme_icon").src = "/images/light_mode.webp";
    }
    else if (darkThemeEnabled === 0){
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
            document.getElementById("title_banner").classList.add("dark");
            document.getElementById("title_banner").classList.remove("light");
            document.getElementById("theme_icon").src = "/images/auto_mode.webp";
        } else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            document.getElementById("title_banner").classList.add("light");
            document.getElementById("title_banner").classList.remove("dark");
            document.getElementById("theme_icon").src = "/images/auto_mode.webp";
        }
    }
    saveThemePreference();
}

function toggleDarkTheme() {
    if (localStorage.getItem("userAccepted")) {
        if (darkThemeEnabled === 2){
            darkThemeEnabled = 0
        } else {
            darkThemeEnabled += 1
        }
        saveThemePreference();
        setTheme();
    }
}

function saveThemePreference() {
    if (localStorage.getItem("userAccepted")) localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
}

function loadThemePreference() {
    const storedTheme = localStorage.getItem("darkThemeEnabled");
    if (storedTheme !== null) {
        darkThemeEnabled = Number(storedTheme);
    }
}