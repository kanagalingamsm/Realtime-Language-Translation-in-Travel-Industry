document.addEventListener("DOMContentLoaded", function() {
    const targetLanguageSelect = document.getElementById("target-language");
    const translateButton = document.getElementById("translate-button");

    // Add language options dynamically using JavaScript
    const languages = {
        "English": "en",
        "Spanish": "es",
        "French": "fr",
        // Add more languages as needed
    };

    for (const language in languages) {
        const option = document.createElement("option");
        option.value = languages[language];
        option.textContent = language;
        targetLanguageSelect.appendChild(option);
    }

    const translatorForm = document.getElementById("translator-form");
    const translatedText = document.getElementById("translated-text");

    translatorForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const text = document.getElementById("text").value;
        const targetLanguage = targetLanguageSelect.value;

        // You can add your translation logic here and update the 'translatedText' element
        // based on the translation result.
        // Example: translatedText.textContent = "Translated text goes here";
    });
});