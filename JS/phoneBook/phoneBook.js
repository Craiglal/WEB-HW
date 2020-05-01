"use strict"
var phoneBook = []; // Тут ви зберігаєте записи як хочете

/*
   Функція додавання запису в телефонну книгу.
*/
phoneBook.add = function (name, phone, email) {
  this.push({Name: name, Phone: phone, Email: email});
};

/*
   Функція пошуку записів в телефонній книзі.
   Пошук ведеться по всім полям.
*/
phoneBook.find = function (query) {
  this.forEach(element => {
    if(element.Name.includes(query))
      document.writeln("<p>" + element.Name + ", " + element.Phone + ", " + element.email +"</p>")
    else if(element.Phone.includes(query))
      document.writeln("<p>" + element.Name + ", " + element.Phone + ", " + element.Email +"</p>")
    else if(element.Email.includes(query))
      document.writeln("<p>" + element.Name + ", " + element.Phone + ", " + element.Email +"</p>")
  });
};

/*
   Функція видалення запису в телефонній книзі.
*/
phoneBook.remove = function (query) {
  let cnt = 0;
  this.forEach(element => {
    let i = this.indexOf(element)
    if(element.Name == query){
      this.splice(i, 1);
      cnt++;
    }
    else if(element.Phone == query){
      this.splice(i, 1);
      cnt++;
    }
    else if(element.Email == query){
      this.splice(i, 1);
      cnt++;
    }
  });
  document.writeln("<p>Вилучен " + cnt + " контакт!" + "</p>")
  return phoneBook;
};

/*
   Функція виведення всіх телефонів.
*/
phoneBook.showTable = function () {
  document.write("<table>");
  document.write("<tr><td>Ім'я</td><td>Телефон</td><td>email</td></tr>");
  this.forEach(element => {
    document.write(`<tr><td>${element.Name}</td><td>${element.Phone}</td><td>${element.Email}</td></tr>`);
  });
  document.write("</table><br>");
};