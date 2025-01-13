function setDefaultTheme() {
    document.body.classList.add('light-mode');
    document.body.classList.add('english');
    document.querySelector('.greeting').textContent = "Hello there, friend. Would you mind turning off the light?"

    document.querySelector('.languageToggle').textContent = "Türkçe"

    document.querySelector('.themeToggle').textContent = "Dark Mode"
}

setDefaultTheme();


const themeToggle = document.querySelector('.themeToggle');
const languageToggle = document.querySelector('.languageToggle')
const container = document.querySelector('.container');

function toggleColorTheme() {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelector('.themeToggle').textContent = 
            document.body.classList.contains('english') ? "Light Mode" : "Açık Mod";
        document.querySelector('.greeting').textContent =
            document.body.classList.contains('english') 
                ? "Wow, it's dark in here. Could you turn the lights on please?" 
                : "Vay be burası çok karanlık. Işığı açsana olur mu?";
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelector('.themeToggle').textContent =
            document.body.classList.contains('english') ? "Dark Mode" : "Koyu Mod";
        document.querySelector('.greeting').textContent = 
            document.body.classList.contains('english')
                ? "Hello there, friend. Would you mind turning off the light?"
                : "Merhaba, dostum. Işığı kapatsana olur mu?";
    }
};

themeToggle.addEventListener('click', (event) => { 
    toggleColorTheme();
});

function toggleLanguage() {
    if (document.body.classList.contains('english')) {
        document.body.classList.remove('english')
        document.body.classList.add('turkish')

        if (document.body.classList.contains('light-mode')) {
            document.querySelector('.themeToggle').textContent = "Koyu Mod"
            document.querySelector('.greeting').textContent = "Merhaba, dostum. Işığı kapatsana olur mu?" 
        }   else {
            document.querySelector('.themeToggle').textContent = "Açık Mod";
            document.querySelector('.greeting').textContent = "Vay be burası çok karanlık. Işığı açsana olur mu?";
        }

        document.querySelector('.languageToggle').textContent = "English"
    } else {
        document.body.classList.remove('turkish');
        document.body.classList.add('english');
    
        if (document.body.classList.contains('light-mode')) {
          document.querySelector('.themeToggle').textContent = "Dark Mode";
          document.querySelector('.greeting').textContent = "Hello there, friend. Would you mind turning off the light?";
        } else {
          document.querySelector('.themeToggle').textContent = "Light Mode";
          document.querySelector('.greeting').textContent = "Wow, it's dark in here. Could you turn the lights on please?";
        }
    
        document.querySelector('.languageToggle').textContent = "Türkçe";
      }
}

languageToggle.addEventListener('click', (event) => { 
    toggleLanguage();
});
