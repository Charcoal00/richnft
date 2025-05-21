document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copyButton");
    const copyMessage = document.getElementById("copyMessage");
    const textToCopy = "rHbC5idsp7Tv2F5gfLceFueFLtEof5gpg7"; // You can change this text

    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            copyMessage.classList.remove("hhidden"); // Show the message
            setTimeout(() => {
                copyMessage.classList.add("hhidden"); // Hide the message after 1 second
            }, 1000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    });
});
