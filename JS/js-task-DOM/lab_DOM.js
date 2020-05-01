//task 1 Використовуйте метод getElementById для пошуку <h2> елемента та змініть його текст на "Привіт".
document.getElementById("banner").innerText = "Привіт";

//task 2 Використовуйте метод getElementsByTagName, щоб знайти третій <li> елемент, і змініть його текст на "Світ".
document.getElementsByTagName("li")[2].innerText = "Світ";

//task 3 Змініть текст другого елемента, з класом "tests" на "Ще трошки попрацюйте".
document.getElementsByClassName("tests")[1].innerText = "Ще трошки попрацюйте";

//task 4 За допомогою властивостей, встновить калас "selected" у третього <li> елементу
document.getElementsByTagName("li")[2].className = "selected";

//task 5 Встановіть атрибут title із значенням 'Вже половина завдань' для елемента <p class="tests">
document.querySelector("p.tests").setAttribute('title', "Вже половина завдань")

//task 6 Змініть колір другого абзацу на червоний
document.getElementsByClassName("tests")[1].style.color = "rgb(255, 0, 0)";

//task 7 Задайте розмір шрифту для другого абзацу 40px
document.getElementsByClassName("tests")[1].style.fontSize = "40px";

//task 8 Задайте властивість float: left для елементів списку
let lis = document.getElementsByTagName("li")
for (const child of lis) {
    child.style.float = "left";
};

//task 9  Видаліть заголовок h1 з текстом "My Foo Tests"
document.getElementsByTagName("h1")[0].remove();
