
// Email validation function
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Export function for Node.js unit testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail };
}

// Browser-specific code
if (typeof document !== 'undefined') {

    console.log("Portfolio website loaded successfully!");

    document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let result = document.getElementById("result");

        if (name.trim().length < 2) {
            result.innerText = "Enter a valid name";
        }
        else if (!validateEmail(email)) {
            result.innerText = "Invalid email address";
        }
        else if (message.trim().length < 10) {
            result.innerText = "Message must contain at least 10 characters";
        }
        else {
            result.innerText = "Validation successful!";
        }
    });
}
