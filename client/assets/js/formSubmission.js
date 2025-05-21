document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");
    const countryCodeSelect = document.getElementById("countryCode"); // Get the select element

    // Function to populate country codes
    function populateCountryCodes() {
        const countryCodes = [
            // Zone 1 - North American Numbering Plan (NANP) - Grouped for conciseness
            { code: "+1", name: "United States (+1)" },
            { code: "+1", name: "Canada (+1)" },
            { code: "+1", name: "Caribbean & US Territories (+1)" }, // General entry for all +1 sub-codes

            // Zone 2 - Africa
            { code: "+20", name: "Egypt (+20)" },
            { code: "+211", name: "South Sudan (+211)" },
            { code: "+212", name: "Morocco (+212)" },
            { code: "+213", name: "Algeria (+213)" },
            { code: "+216", name: "Tunisia (+216)" },
            { code: "+218", name: "Libya (+218)" },
            { code: "+220", name: "Gambia (+220)" },
            { code: "+221", name: "Senegal (+221)" },
            { code: "+222", name: "Mauritania (+222)" },
            { code: "+223", name: "Mali (+223)" },
            { code: "+224", name: "Guinea (+224)" },
            { code: "+225", name: "Côte d'Ivoire (+225)" },
            { code: "+226", name: "Burkina Faso (+226)" },
            { code: "+227", name: "Niger (+227)" },
            { code: "+228", name: "Togo (+228)" },
            { code: "+229", name: "Benin (+229)" },
            { code: "+230", name: "Mauritius (+230)" },
            { code: "+231", name: "Liberia (+231)" },
            { code: "+232", name: "Sierra Leone (+232)" },
            { code: "+233", name: "Ghana (+233)" },
            { code: "+234", name: "Nigeria (+234)" }, // Keep Nigeria as a default or highlight if needed
            { code: "+235", name: "Chad (+235)" },
            { code: "+236", name: "Central African Republic (+236)" },
            { code: "+237", name: "Cameroon (+237)" },
            { code: "+238", name: "Cabo Verde (+238)" },
            { code: "+239", name: "Sao Tome and Principe (+239)" },
            { code: "+240", name: "Equatorial Guinea (+240)" },
            { code: "+241", name: "Gabon (+241)" },
            { code: "+242", name: "Republic of the Congo (+242)" },
            { code: "+243", name: "DR Congo (+243)" },
            { code: "+244", name: "Angola (+244)" },
            { code: "+245", name: "Guinea-Bissau (+245)" },
            { code: "+246", name: "Diego Garcia (+246)" },
            { code: "+247", name: "Ascension Island (+247)" },
            { code: "+248", name: "Seychelles (+248)" },
            { code: "+249", name: "Sudan (+249)" },
            { code: "+250", name: "Rwanda (+250)" },
            { code: "+251", name: "Ethiopia (+251)" },
            { code: "+252", name: "Somalia (+252)" },
            { code: "+253", name: "Djibouti (+253)" },
            { code: "+254", name: "Kenya (+254)" },
            { code: "+255", name: "Tanzania (+255)" },
            { code: "+256", name: "Uganda (+256)" },
            { code: "+257", name: "Burundi (+257)" },
            { code: "+258", name: "Mozambique (+258)" },
            { code: "+260", name: "Zambia (+260)" },
            { code: "+261", name: "Madagascar (+261)" },
            { code: "+262", name: "Réunion / Mayotte (+262)" },
            { code: "+263", name: "Zimbabwe (+263)" },
            { code: "+264", name: "Namibia (+264)" },
            { code: "+265", name: "Malawi (+265)" },
            { code: "+266", name: "Lesotho (+266)" },
            { code: "+267", name: "Botswana (+267)" },
            { code: "+268", name: "Eswatini (+268)" },
            { code: "+269", name: "Comoros (+269)" },
            { code: "+290", name: "Saint Helena (+290)" },
            { code: "+291", name: "Eritrea (+291)" },
            { code: "+297", name: "Aruba (+297)" },
            { code: "+298", name: "Faroe Islands (+298)" },
            { code: "+299", name: "Greenland (+299)" },

            // Zone 3 & 4 - Europe
            { code: "+30", name: "Greece (+30)" },
            { code: "+31", name: "Netherlands (+31)" },
            { code: "+32", name: "Belgium (+32)" },
            { code: "+33", name: "France (+33)" },
            { code: "+34", name: "Spain (+34)" },
            { code: "+36", name: "Hungary (+36)" },
            { code: "+39", name: "Italy (+39)" },
            { code: "+350", name: "Gibraltar (+350)" },
            { code: "+351", name: "Portugal (+351)" },
            { code: "+352", name: "Luxembourg (+352)" },
            { code: "+353", name: "Ireland (+353)" },
            { code: "+354", name: "Iceland (+354)" },
            { code: "+355", name: "Albania (+355)" },
            { code: "+356", name: "Malta (+356)" },
            { code: "+357", name: "Cyprus (+357)" },
            { code: "+358", name: "Finland (+358)" },
            { code: "+359", name: "Bulgaria (+359)" },
            { code: "+370", name: "Lithuania (+370)" },
            { code: "+371", name: "Latvia (+371)" },
            { code: "+372", name: "Estonia (+372)" },
            { code: "+373", name: "Moldova (+373)" },
            { code: "+374", name: "Armenia (+374)" },
            { code: "+375", name: "Belarus (+375)" },
            { code: "+376", name: "Andorra (+376)" },
            { code: "+377", name: "Monaco (+377)" },
            { code: "+378", name: "San Marino (+378)" },
            { code: "+379", name: "Vatican City (+379)" },
            { code: "+380", name: "Ukraine (+380)" },
            { code: "+381", name: "Serbia (+381)" },
            { code: "+382", name: "Montenegro (+382)" },
            { code: "+383", name: "Kosovo (+383)" },
            { code: "+385", name: "Croatia (+385)" },
            { code: "+386", name: "Slovenia (+386)" },
            { code: "+387", name: "Bosnia & Herzegovina (+387)" },
            { code: "+389", name: "North Macedonia (+389)" },
            { code: "+40", name: "Romania (+40)" },
            { code: "+41", name: "Switzerland (+41)" },
            { code: "+43", name: "Austria (+43)" },
            { code: "+44", name: "United Kingdom (+44)" },
            { code: "+45", name: "Denmark (+45)" },
            { code: "+46", name: "Sweden (+46)" },
            { code: "+47", name: "Norway (+47)" },
            { code: "+48", name: "Poland (+48)" },
            { code: "+49", name: "Germany (+49)" },
            { code: "+420", name: "Czech Republic (+420)" },
            { code: "+421", name: "Slovakia (+421)" },
            { code: "+423", name: "Liechtenstein (+423)" },

            // Zone 5 - South America and Mexico
            { code: "+51", name: "Peru (+51)" },
            { code: "+52", name: "Mexico (+52)" },
            { code: "+53", name: "Cuba (+53)" },
            { code: "+54", name: "Argentina (+54)" },
            { code: "+55", name: "Brazil (+55)" },
            { code: "+56", name: "Chile (+56)" },
            { code: "+57", name: "Colombia (+57)" },
            { code: "+58", name: "Venezuela (+58)" },
            { code: "+590", name: "Guadeloupe (+590)" },
            { code: "+591", name: "Bolivia (+591)" },
            { code: "+592", name: "Guyana (+592)" },
            { code: "+593", name: "Ecuador (+593)" },
            { code: "+594", name: "French Guiana (+594)" },
            { code: "+595", name: "Paraguay (+595)" },
            { code: "+596", name: "Martinique (+596)" },
            { code: "+597", name: "Suriname (+597)" },
            { code: "+598", name: "Uruguay (+598)" },
            { code: "+599", name: "Caribbean Netherlands (+599)" },

            // Zone 6 - Oceania and Southeast Asia
            { code: "+60", name: "Malaysia (+60)" },
            { code: "+61", name: "Australia (+61)" },
            { code: "+62", name: "Indonesia (+62)" },
            { code: "+63", name: "Philippines (+63)" },
            { code: "+64", name: "New Zealand (+64)" },
            { code: "+65", name: "Singapore (+65)" },
            { code: "+66", name: "Thailand (+66)" },
            { code: "+670", name: "Timor-Leste (+670)" },
            { code: "+672", name: "Australian Territories (+672)" },
            { code: "+673", name: "Brunei (+673)" },
            { code: "+674", name: "Nauru (+674)" },
            { code: "+675", name: "Papua New Guinea (+675)" },
            { code: "+676", name: "Tonga (+676)" },
            { code: "+677", name: "Solomon Islands (+677)" },
            { code: "+678", name: "Vanuatu (+678)" },
            { code: "+679", name: "Fiji (+679)" },
            { code: "+680", name: "Palau (+680)" },
            { code: "+681", name: "Wallis and Futuna (+681)" },
            { code: "+682", name: "Cook Islands (+682)" },
            { code: "+683", name: "Niue (+683)" },
            { code: "+685", name: "Samoa (+685)" },
            { code: "+686", name: "Kiribati (+686)" },
            { code: "+687", name: "New Caledonia (+687)" },
            { code: "+688", name: "Tuvalu (+688)" },
            { code: "+689", name: "French Polynesia (+689)" },
            { code: "+690", name: "Tokelau (+690)" },
            { code: "+691", name: "Micronesia (+691)" },
            { code: "+692", name: "Marshall Islands (+692)" },

            // Zone 7 - Russia and Kazakhstan
            { code: "+7", name: "Russia / Kazakhstan (+7)" },

            // Zone 8 - East Asia and Special Services
            { code: "+81", name: "Japan (+81)" },
            { code: "+82", name: "South Korea (+82)" },
            { code: "+84", name: "Vietnam (+84)" },
            { code: "+850", name: "North Korea (+850)" },
            { code: "+852", name: "Hong Kong (+852)" },
            { code: "+853", name: "Macau (+853)" },
            { code: "+855", name: "Cambodia (+855)" },
            { code: "+856", name: "Laos (+856)" },
            { code: "+86", name: "China (+86)" },
            { code: "+870", name: "Inmarsat SNAC (+870)" }, // Satellite services
            { code: "+878", name: "UPT (+878)" }, // Universal Personal Telecommunications
            { code: "+880", name: "Bangladesh (+880)" },
            { code: "+881", name: "GMSS (+881)" }, // Global Mobile Satellite System
            { code: "+882", name: "International Networks (+882)" },
            { code: "+883", name: "International Networks (+883)" },
            { code: "+886", name: "Taiwan (+886)" },

            // Zone 9 - Central Asia, South Asia, West Asia (Middle East)
            { code: "+90", name: "Turkey (+90)" },
            { code: "+91", name: "India (+91)" },
            { code: "+92", name: "Pakistan (+92)" },
            { code: "+93", name: "Afghanistan (+93)" },
            { code: "+94", name: "Sri Lanka (+94)" },
            { code: "+95", name: "Myanmar (+95)" },
            { code: "+960", name: "Maldives (+960)" },
            { code: "+961", name: "Lebanon (+961)" },
            { code: "+962", name: "Jordan (+962)" },
            { code: "+963", name: "Syria (+963)" },
            { code: "+964", name: "Iraq (+964)" },
            { code: "+965", name: "Kuwait (+965)" },
            { code: "+966", name: "Saudi Arabia (+966)" },
            { code: "+967", name: "Yemen (+967)" },
            { code: "+968", name: "Oman (+968)" },
            { code: "+970", name: "Palestine (+970)" },
            { code: "+971", name: "United Arab Emirates (+971)" },
            { code: "+972", name: "Israel (+972)" },
            { code: "+973", name: "Bahrain (+973)" },
            { code: "+974", name: "Qatar (+974)" },
            { code: "+975", name: "Bhutan (+975)" },
            { code: "+976", name: "Mongolia (+976)" },
            { code: "+977", name: "Nepal (+977)" },
            { code: "+98", name: "Iran (+98)" },
            { code: "+992", name: "Tajikistan (+992)" },
            { code: "+993", name: "Turkmenistan (+993)" },
            { code: "+994", name: "Azerbaijan (+994)" },
            { code: "+995", name: "Georgia (+995)" },
            { code: "+996", name: "Kyrgyzstan (+996)" },
            { code: "+998", name: "Uzbekistan (+998)" },
        ];

        // Sort the countries alphabetically by name
        countryCodes.sort((a, b) => a.name.localeCompare(b.name));

        // Add a default "Select country" option first
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select Country Code";
        defaultOption.disabled = true;
        defaultOption.selected = true; // Make it the default selected option
        countryCodeSelect.appendChild(defaultOption);

        // Populate the dropdown
        countryCodes.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.code;
            option.textContent = country.name;
            countryCodeSelect.appendChild(option);
        });

        // Set Nigeria (+234) as the default if it exists and is not already selected by the user
        // This makes sense given your location being Lagos, Nigeria.
        const nigeriaOption = countryCodeSelect.querySelector(
            'option[value="+234"]'
        );
        if (nigeriaOption) {
            nigeriaOption.selected = true;
            // You might want to remove the 'Select Country Code' default if setting a specific one
            // Or just ensure it's not selected if the +234 is auto-selected
        }
    }

    // Call the function to populate the dropdown when the DOM is ready
    if (countryCodeSelect) {
        populateCountryCodes();
    } else {
        console.error("Country code select element not found.");
    }

    // Your existing form submission logic
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent default form submission

            // Gather all form data
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            // Now get the value from the dynamically populated select
            const countryCode = document.getElementById("countryCode").value;
            const contactNumber = document
                .getElementById("contactNumber")
                .value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic client-side validation for the country code
            if (!countryCode) {
                responseMessage.textContent = "Please select a country code.";
                responseMessage.style.color = "red";
                return; // Stop submission
            }

            // Prepare the data object to send to the backend
            const formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                countryCode: countryCode,
                contactNumber: contactNumber,
                message: message,
            };

            responseMessage.textContent = "Sending your message...";
            responseMessage.style.color = "blue";

            try {
                // const backendUrl = "http://localhost:3000/send-email";
                const backendUrl = "https://rich-nft.onrender.com/send-email";

                const response = await fetch(backendUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (response.ok) {
                    responseMessage.textContent =
                        "Message sent successfully! We will get back to you shortly.";
                    responseMessage.style.color = "green";
                    contactForm.reset(); // Clear the form fields on success
                    // Reset the country code dropdown to its initial state (e.g., Select Country Code or +234)
                    const nigeriaOptionAfterReset =
                        countryCodeSelect.querySelector('option[value="+234"]');
                    if (nigeriaOptionAfterReset) {
                        nigeriaOptionAfterReset.selected = true;
                    } else {
                        // Fallback to default "Select Country Code" if +234 isn't available or preferred
                        countryCodeSelect.value = "";
                    }
                } else {
                    responseMessage.textContent =
                        result.error ||
                        "Failed to send message. Please try again later.";
                    responseMessage.style.color = "red";
                    console.error(
                        "Backend error details:",
                        result.details || result.error
                    );
                }
            } catch (error) {
                console.error("Network or fetch error:", error);
                responseMessage.textContent =
                    "A network error occurred. Please check your connection and try again.";
                responseMessage.style.color = "red";
            }
        });
    } else {
        console.error("Contact form element not found.");
    }
});
