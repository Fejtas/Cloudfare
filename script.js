// Počkáme, až se celá stránka načte
document.addEventListener('DOMContentLoaded', () => {
    // Najdeme tlačítko podle jeho ID
    const themeButton = document.getElementById('theme-toggle');
    
    // Přidáme akci na kliknutí
    themeButton.addEventListener('click', () => {
        // Přepínáme třídu 'dark-mode' na elementu <body>
        document.body.classList.toggle('dark-mode');
        
        // Změna textu a ikonky na tlačítku podle aktuálního režimu
        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = '☀️ Světlý režim';
        } else {
            themeButton.textContent = '🌙 Tmavý režim';
        }
    });
});