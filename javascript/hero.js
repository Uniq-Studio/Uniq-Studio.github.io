document.addEventListener("DOMContentLoaded", () => {
    setTimeout(changeHero, 2000)
    setTimeout(removeAside, 2600)
});

function changeHero(){
    document.getElementById('image_aside').style.opacity = "0";
    document.getElementById('text_aside').style.opacity = "0";
    document.getElementById('hero_section').style.opacity = "1";
    document.getElementById('title_banner').style.height = "700px";
}

function removeAside(){
    document.getElementById('image_aside').remove()
    document.getElementById('text_aside').remove()
}