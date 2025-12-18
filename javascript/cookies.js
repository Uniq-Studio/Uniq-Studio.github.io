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
        banner.innerHTML = `
        <h4>Customise Uniq Studio</h4>
        <p>This will be saved locally.</p>
        <p>What is your name?</p>
        <form action="../index" method="POST">
            <div class="input">
            <input type="text" id="name" name="name" required>
            </div>     
        </form>
        <br>
        <div class="cookie-actions">
            <button id="decline-customise" class="decline">Skip</button>
            <button id="accept-customise" class="accept">Add</button>
        </div>
        
    `;

        document.getElementById("accept-customise").addEventListener("click", () => {
            const usersName = document.getElementById("name").value.trim();

            if (usersName) {
                localStorage.setItem("usersName", usersName);
                document.getElementById("hey_user").textContent = `Hey, ${usersName}!`;
            }

            banner.remove();
        });

        document.getElementById("decline-customise").addEventListener("click", () => {

            localStorage.setItem("usersName", "User");
            document.getElementById("hey_user").textContent = `Hey, ${usersName}!`;
            banner.remove();
        });
    });

    // Decline cookies
    document.getElementById("decline-cookies").addEventListener("click", () => {
        localStorage.removeItem("userAccepted");
        localStorage.removeItem("darkThemeEnabled");
        localStorage.removeItem("usersName");
        banner.remove();
    });
});
