const textConfig = {
    english: {
      light: {
        greeting: "Hello there, friend. Would you mind turning off the light?",
        themeToggle: "Dark Mode",
      },
      dark: {
        greeting: "Wow, it's dark in here. Could you turn the lights on please?",
        themeToggle: "Light Mode",
      },
      languageToggle: "Türkçe",
    },
    turkish: {
      light: {
        greeting: "Merhaba, dostum. Işığı kapatsan olur mu?",
        themeToggle: "Koyu Mod",
      },
      dark: {
        greeting: "Vay be burası çok karanlık. Işığı açsan olur mu?",
        themeToggle: "Açık Mod",
      },
      languageToggle: "English",
    },
};

function updateText() {
    const language = document.body.classList.contains('english') ? 'english' : 'turkish';
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    
    document.querySelector('.greeting').textContent = textConfig[language][theme].greeting;
    document.querySelector('.themeToggle').textContent = textConfig[language][theme].themeToggle;
    document.querySelector('.languageToggle').textContent = textConfig[language].languageToggle;
}

function setDefaultTheme() {
    document.body.classList.add('light-mode', 'english');
    updateText();
}
  
function toggleColorTheme() {
if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}
updateText();
}
  
function toggleLanguage() {
if (document.body.classList.contains('english')) {
    document.body.classList.remove('english');
    document.body.classList.add('turkish');
} else {
    document.body.classList.remove('turkish');
    document.body.classList.add('english');
}
updateText();
}
  
setDefaultTheme();
  
document.querySelector('.themeToggle').addEventListener('click', toggleColorTheme);
document.querySelector('.languageToggle').addEventListener('click', toggleLanguage);