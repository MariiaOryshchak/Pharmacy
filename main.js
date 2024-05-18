// Використання методу querySelectorAll
var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
headings.forEach(function(heading) {
    heading.style.color = "dark grey";
});

var menuButton = document.querySelector('.toggle-menu');
var popupMenu = document.querySelector('.popup-menu');

function toggleMenu() {
    var popupMenu = document.querySelector('.popup-menu');
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none';
    } else {
        popupMenu.style.display = 'block';
    }
}



popupMenu.addEventListener('mouseover', function(event) {
    var hoveredElement = event.target;
    if (hoveredElement.tagName === 'A') {
        hoveredElement.style.color = 'red';
    }
});

popupMenu.addEventListener('mouseout', function(event) {
    var unhoveredElement = event.target;
    if (unhoveredElement.tagName === 'A') {
        unhoveredElement.style.color = ''; 
    }
});

var objHandler = {
    handleEvent: function(event) {
        alert("Подія на елементі: " + event.currentTarget.tagName);
    }
};

var uniqueHeading = document.getElementById("unique-heading");
uniqueHeading.addEventListener('click', objHandler);

setTimeout(function() {
    uniqueHeading.removeEventListener('click', objHandler);
}, 10000); 

document.addEventListener("DOMContentLoaded", function() {
    const popularCategories = document.querySelector(".container ul");

    popularCategories.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            if (event.target.classList.contains("click_color")) {
                event.target.classList.remove("click_color");
            } else {
                event.target.classList.add("click_color");
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('[data-behavior="menu"]');

    menu.addEventListener('click', function(event) {
        const target = event.target.closest('[data-action]');
        if (target) {
            const action = target.dataset.action;
            switch (action) {
                case 'goHome':
                    window.location.href = 'index.html#home';
                    console.log("Перехід на головну сторінку");
                    break;
                case 'showCategories':
                    window.location.href = 'categories.html';
                    console.log("Відображення сторінки з категоріями");
                    break;
                case 'showDelivery':
                    window.location.href = 'delivery.html';
                    console.log("Відображення сторінки з доставкою");
                    break;
                case 'showContact':
                    window.location.href = 'contact.html';
                    console.log("Відображення сторінки з контактами");
                    break;
                default:
                    console.log("Невідома дія");
            }
        }
    });
});



// Додаємо обробник події прокрутки до вікна
window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    if (scrollTop >= 0) {
        popupMenu.classList.add('fixed'); 
    } else {
        popupMenu.classList.remove('fixed'); 
    }
});

var footer = document.querySelector('.footer');
var bottomReached = false;

window.addEventListener("scroll", function() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;
    var footerHeight = footer.offsetHeight;

    if (scrollTop + windowHeight >= documentHeight - footerHeight) {
        bottomReached = true;
    } else {
        bottomReached = false;
    }

    if (bottomReached) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});


//Реалізація кошика
let cartOpen = false;

function toggleCart() {
    const cart = document.getElementById("cart");
    cartOpen = !cartOpen;
    if (cartOpen) {
        cart.style.display = "block";
    } else {
        cart.style.display = "none";
    }
}

let cartCount = 0; 
const cartItems = document.getElementById("cart-items"); 

function addToCart(productName, productId) {
    cartCount++; 
    updateCartCount(); 
    const li = document.createElement("li"); 
    li.textContent = productName; 
    const removeBtn = document.createElement("span"); 
    removeBtn.textContent = "❌"; 
    removeBtn.classList.add("remove-item"); 
    removeBtn.onclick = function() {
        cartCount--; 
        updateCartCount(); 
        cartItems.removeChild(li); 
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li); 
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.textContent = cartCount; 
}

var addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var productName = this.parentElement.querySelector('p:first-of-type').textContent.trim(); 
        var productId = this.parentElement.querySelector('p:first-of-type').getAttribute('data-product-id'); 
        alert('Ви додали товар "' + productName + '" до кошика.');
        addToCart(productName, productId); 
    });
});

