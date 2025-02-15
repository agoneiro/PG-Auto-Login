document.addEventListener("DOMContentLoaded", async () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("save");
    const statusText = document.getElementById("status");

    // Get login details if saved previously
    chrome.storage.local.get(["username", "password"], (data) => {
        if (data.username) usernameInput.value = data.username;
        if (data.password) passwordInput.value = data.password;
    });

    // Save button service
    saveButton.addEventListener("click", () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username && password) {
            chrome.storage.local.set({ username, password }, () => {
                statusText.textContent = "Login details has been save!";
            });
        } else {
            statusText.textContent = "Enter login and password!";
        }
    });
});
