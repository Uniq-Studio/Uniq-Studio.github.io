var userAccepted = false;
var usersName = "User"

document.addEventListener("DOMContentLoaded", () => {
    // Check if user has already made a choice
    if (localStorage.getItem("userAccepted")) return;

    // Create banner container
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
        <h4>This website uses cookies 🍪</h4>
        <p>
            This website uses optional cookies to remember your theme preferences
            and improve your browsing experience. These cookies do not collect
            personal data for advertising or analytics purposes.
        </p>
        <div class="cookie-actions">
            <button id="decline-cookies" class="decline">Decline</button>
            <button id="accept-cookies" class="accept">Accept</button>
        </div>
    `;

    document.body.appendChild(banner);

    // Accept cookies
    document.getElementById("accept-cookies").addEventListener("click", () => {
        localStorage.setItem("userAccepted", true);
    });

    // Decline cookies
    document.getElementById("decline-cookies").addEventListener("click", () => {
        localStorage.removeItem("userAccepted");
        localStorage.removeItem("darkThemeEnabled");
        localStorage.removeItem("usersName");
        banner.remove();
    });
});
