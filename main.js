// Код для виводу інформації про розробника
function showDeveloperInfo(surname, name, position = "розробник") {
    alert("Прізвище: " + surname + "\nІм'я: " + name + "\nПосада: " + position);
}
//Код для діалогу із користувачем
function userDialog() {
    var userInput;
while (true) {
    userInput = prompt("Введіть ваше ім'я:", "Ім'я");
    if (userInput !== null) {
        alert("Привіт, " + userInput + "!");
        break; // Зупиняє виконання циклу після успішного введення
    } else {
        alert("Ви скасували введення. Спробуйте ще раз.");
    }
}
}

// Код для зміни фону сторінки на 30 секунд
setTimeout(function() {
    document.body.style.backgroundColor = "#E6E6FA"; 
    setTimeout(function() {
        document.body.style.backgroundColor = "#f2f2f2"; 
    }, 30000); 
}, 0); 

function compareStrings(string1, string2) {
    if (string1.length === string2.length) {
        if (string1 === string2) {
            alert("Рядки рівні.");
        } else if (string1 > string2) {
            alert("Перший рядок більший: " + string1);
        } else {
            alert("Другий рядок більший: " + string2);
        }
    } else if (string1.length > string2.length) {
        alert("Перший рядок більший: " + string1);
    } else {
        alert("Другий рядок більший: " + string2);
    }
}

// Функція для перенаправлення на сторінку "categories.html"
function redirectToCategoriesPage() {
    location.assign("categories.html");
}

// Обробник події для перенаправлення після кліку на кнопку
document.getElementById("unique-heading").addEventListener("click", redirectToCategoriesPage);

// Використання методу querySelectorAll
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
headings.forEach(function(heading) {
    heading.style.color = "dark grey";
});

document.addEventListener("DOMContentLoaded", function() {
    // Використання властивості innerHTML для зміни вмісту елемента з id="unique-heading"
    document.getElementById("unique-heading").innerHTML = "Ласкаво просимо на головну сторінку";

    // Використання властивості outerHTML для заміни елемента з id="unique-heading" на новий елемент
    var newHeading = document.createElement("h1");
    newHeading.textContent = "Ласкаво просимо";
    document.getElementById("unique-heading").outerHTML = newHeading.outerHTML;

    // Використання властивості nodeValue для зміни текстового вмісту текстового вузла
    var paragraph = document.querySelector("p");
    paragraph.childNodes[0].nodeValue = "Нажміть на кнопку щоб перейти на сторінку";

    // Використання властивості textContent для зміни текстового вмісту елементу з id="unique-medicine"
    document.getElementById("unique-medicine").textContent = "Ліки від алергії";

    // Створення нового елемента та додавання його до вузла з класом "container" за допомогою append()
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Новий параграф, доданий за допомогою append()";
    document.querySelector(".container").append(newParagraph);

    // Додавання нового текстового вузла перед першим дочірнім елементом вузла з класом "container" за допомогою prepend()
    var newText = document.createTextNode("Початковий текст, доданий перед всіма іншими елементами");
    document.querySelector(".container").prepend(newText);

    // Додавання нового елемента після вузла з id="home" за допомогою after()
    var newDiv = document.createElement("div");
    newDiv.textContent = "Новий елемент, доданий після заголовка з id='home'";
    document.getElementById("home").after(newDiv);

    // Заміна елемента з id="home" новим елементом
    var newHeading = document.createElement("h6");
    newHeading.textContent = "Заміна елемента";
    document.getElementById("home").replaceWith(newHeading);

    // Видалення елемента з id="home1" з документу
    document.getElementById("home1").remove();
});


