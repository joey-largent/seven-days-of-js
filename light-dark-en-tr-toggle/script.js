function setDefaultTheme() {
    document.body.classList.add('light-mode');
    document.querySelector('#greeting').textContent = "Hello there, friend. Would you mind turning off the light?"

    document.querySelector('#languageToggle').textContent = "Türkçe"

    document.querySelector('#themeToggle').textContent = "Dark Mode"
}

setDefaultTheme();


toggleColorTheme()

toggleLanguage()

toggleText()
