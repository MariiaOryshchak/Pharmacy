// Перевірка, чи сторінка вже завершила завантаження
if (document.readyState === "complete") {
    // Використання document.write() для додавання текстового вмісту
    document.write("<p>Цей текст доданий за допомогою document.write</p>");
} else {
    // Якщо сторінка ще завантажується, чекаємо на завершення та використовуємо document.write()
    document.addEventListener("DOMContentLoaded", function() {
        document.write("<p>Цей текст доданий за допомогою document.write</p>");
    });
}
