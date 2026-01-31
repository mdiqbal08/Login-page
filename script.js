function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            if (username === "" || password === "") {
                errorMsg.textContent = "Please fill in all fields.";
                return;
            }

            // Demo credentials
            if (username === "admin" && password === "1234") {
                alert("Login successful!");
                errorMsg.textContent = "";
            } else {
                errorMsg.textContent = "Invalid username or password.";
            }
        }