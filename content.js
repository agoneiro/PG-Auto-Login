// Get username and password from local storage and log in
chrome.storage.local.get(["username", "password"], async (data) => {
    if(data.username && data.password) {
        const loginField = document.querySelector("input#username");
        const passwordField = document.querySelector("input#password");
        const loginButton = document.querySelector("input#submit_button");

        if(loginField && passwordField) {
            loginField.value = data.username;
            passwordField.value = data.password;

            if(loginButton) {
                loginButton.click();
            }

            console.log("Succesfully logged in.")
        }
        else {
            console.error("No login fields found!")
        }
    }
    else {
        console.log("Username and password not found.")
    }
});