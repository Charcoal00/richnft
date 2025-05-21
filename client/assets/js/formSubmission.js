document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission

            // Gather all form data
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const countryCode = document.getElementById("countryCode").value;
            const contactNumber = document
                .getElementById("contactNumber")
                .value.trim();
            const message = document.getElementById("message").value.trim();

            // Prepare the data object to send to the backend
            const formData = {
                firstName: firstName,
                lastName: lastName,
                email: email, // Send the user's email as 'email'
                countryCode: countryCode,
                contactNumber: contactNumber,
                message: message,
            };

            responseMessage.textContent = "Sending your message...";
            responseMessage.style.color = "#e0e0e0"; // Or use a CSS class for styling

            try {
                // IMPORTANT: Adjust the URL to your backend server's email sending endpoint
                const backendUrl = "http://localhost:3000/send-email";

                const response = await fetch(backendUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData), // Send all collected data
                });

                const result = await response.json();

                if (response.ok) {
                    responseMessage.textContent =
                        "Message sent successfully! We will get back to you shortly.";
                    responseMessage.style.color = "#ffcc00";
                    contactForm.reset(); // Clear the form fields on success
                } else {
                    // Display error message from the backend
                    responseMessage.textContent =
                        result.error ||
                        "Failed to send message. Please try again later.";
                    responseMessage.style.color = "rgba(255, 80, 80, 0.73)";
                    console.error(
                        "Backend error details:",
                        result.details || result.error
                    );
                }
            } catch (error) {
                console.error("Network or fetch error:", error);
                responseMessage.textContent =
                    "A network error occurred. Please check your connection and try again.";
                responseMessage.style.color = "rgba(255, 80, 80, 0.73)";
            }
        });
    } else {
        console.error("Contact form element not found.");
    }
});
