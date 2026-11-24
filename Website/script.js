const message = document.getElementById("message");
const wordCount = document.getElementById("wordCount");
const contactForm = document.getElementById("contactForm");

const MY_EMAIL = "bilalshahzaditalia345@gmail.com";

message.addEventListener("input", function () {
    const words = message.value.trim().split(/\s+/).filter(Boolean);
    wordCount.textContent = words.length + (words.length === 1 ? " word" : " words");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const messageText = message.value.trim();

    const body =
        messageText + "\r\n\r\n" +
        "---\r\n" +
        "From: " + firstName + " " + lastName + "\r\n" +
        "Reply to: " + email;

    window.location.href =
        "mailto:" + MY_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    contactForm.reset();
    wordCount.textContent = "0 words";
});

