var darkThemeEnabled = false;


function setTheme(){
    loadThemePreference();

    if(darkThemeEnabled){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        document.getElementById("title_banner").classList.add("dark");
        document.getElementById("title_banner").classList.remove("light");
        document.getElementById("theme_icon").src = "/images/dark_mode.webp";
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        document.getElementById("title_banner").classList.add("light");
        document.getElementById("title_banner").classList.remove("dark");
        document.getElementById("theme_icon").src = "/images/light_mode.webp";
    }
    saveThemePreference()
}

function toggleDarkTheme() {
    darkThemeEnabled = !darkThemeEnabled;
    saveThemePreference();
    setTheme();
}

function saveThemePreference() {
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
}

function loadThemePreference() {
    const storedTheme = localStorage.getItem("darkThemeEnabled");
    darkThemeEnabled = storedTheme === "true";
}