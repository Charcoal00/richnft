document.addEventListener("DOMContentLoaded", () => {
    const sr = ScrollReveal({
        origin: "bottom",
        distance: "70%",
        duration: 1000,
        delay: 500,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        // reset: true,
    });

    sr.reveal("header", { origin: "center", distance: "0" });
    sr.reveal(
        ".amd, .hero h1, .cta-buttons, .tokenomics-title, .to-top, .tokenomics-address",
        {
            delay: 1000,
            origin: "center",
            distance: "0",
            interval: 500,
        }
    );
    sr.reveal(".hero h1, .tokenomics-diagram", {
        scale: 0.6,
        duration: 1000,
        ease: "ease",
    });
    sr.reveal(".rich-card", {
        distance: "50%",
    });
    sr.reveal(
        ".rich-card-header, .rich-card-overview, .rich-card-description, .rich-card-read-more",
        {
            delay: 1000,
            origin: "center",
            distance: "0",
            interval: 500,
        }
    );
    sr.reveal(".tokenomics-diagram", {
        delay: 100,
    });
    sr.reveal(".tokenomics-address, .tokenomics-tabs, .tokenomics-container", {
        delay: 2000,
        origin: "top",
        distance: "30%",
        interval: 500,
    });
    sr.reveal(".tokenomics-, .content-wrapper h1", {
        origin: "center",
        distance: "0%",
        scale: 0.9,
    });
    sr.reveal(".tokenomics-address", {
        delay: 1500,
    });
    sr.reveal(".roadmap-header, .card-container", {
        origin: "left",
        distance: "20%",
        interval: 1000,
    });
    sr.reveal(".card-container", {
        origin: "bottom",
    });
    sr.reveal(".nft-market h2", {
        origin: "left",
        delay: 500,
    });
    sr.reveal(".product-card, .rich-card-container, .rich-card-content img", {
        delay: 1000,
        origin: "bottom",
        interval: 300,
        distance: "30%",
    });
    sr.reveal(
        ".donation-content h2, .donation-content p, .donation-content div, .buy-rich-button",
        {
            delay: 1000,
            origin: "center",
            interval: 300,
            distance: "0",
        }
    );
    sr.reveal(".buy-rich-button", {
        delay: 3000,
    });
    sr.reveal(".footer-logo", {
        origin: "top",
        delay: 1000,
        distance: "20%",
    });
    sr.reveal(
        ".footer-logo, .footer-tagline, .social-links, .footer-links li, .newsletter h3, .newsletter .subscribe-btn, .copyright",
        {
            origin: "top",
            delay: 1000,
            interval: 300,
        }
    );
    sr.reveal(".span-span, main-heading", {
        origin: "left",
        distance: "20%",
        interval: 200,
    });
    sr.reveal(".main-heading, .contact-form-container", {
        origin: "center",
        distance: "0%",
        scale: 0.8,
        delay: 1200,
    });
     sr.reveal(".sr-only, input, .phone-input-group select, textarea", {
         origin: "top",
         distance: "10%",
         interval: 200,
         delay: 2000,
     });
     sr.reveal(
         ".content-wrapper div, .content-wrapper p, .our-vision-box, .blockchain h2, .blockchain p, .blockchain li",
         {
             origin: "top",
             distance: "10%",
             interval: 300,
             delay: 1200,
         }
     );
     sr.reveal(".content-wrapper p", {
         origin: "bottom",
     });

     sr.reveal(".vision-content .image-content", {
         origin: "right",
         scale: 0.8,
     });
     
    
});
