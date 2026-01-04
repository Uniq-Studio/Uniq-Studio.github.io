let open = false;

function toggleMenu() {
    if (open){
        closeMenu();
    } else {
        openMenu()
    }
}

document.addEventListener("click", e => {closeMenu()})

function openMenu(){
    if(!open) {
        const menu = document.createElement("menu");
        menu.id = "menu";
        menu.innerHTML = `
        <ul class="menu_list"">
            <li class="menu_item"><a title="Unavailable" onclick="alert('Sorry, Setting is currently unavailable.')"><img class="menu_image" src="../images/ui/settings.webp" alt="Settings Cog">Settings</a></li>
            <li class="menu_item"><a href="../page/login"><img class="menu_image" src="../images/ui/login.webp" alt="Login Icon">Login</a></li>
        </ul>
    `;
        document.body.appendChild(menu);

        setTimeout(() =>{
            menu.style.opacity = "1"
            open = true
        }, 1)
    }
}

function closeMenu(){
    const menu = document.getElementById("menu");
    if(!open) return;
    if(open) {
        menu.style.opacity = "0"
        setTimeout(() => {
            menu.remove();
            open = false;
        }, 600)
    }
}
