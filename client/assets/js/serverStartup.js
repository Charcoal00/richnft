// const backendUrl = "http://localhost:3000";
const backendUrl = "https://rich-nft.onrender.com";

async function fetchAndDisplayBackendText() {
    try {
        const response = await fetch(`${backendUrl}/message`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `HTTP error! Status: ${response.status} - ${errorText}`
            );
        }

        const text = await response.text();

        console.log("--- Backend meassage---");
        console.log(text);
        console.log("--------------------------------------------");
    } catch (error) {
        console.error("Error fetching backend text:", error);
    }
}

window.addEventListener("load", fetchAndDisplayBackendText);
