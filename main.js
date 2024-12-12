// let statusEle = document.getElementById('status');

// let age = 12;

// if (age >= 18) {
//     statusEle.innerHTML = "Congratulation you are eligible to vote";
//     statusEle.setAttribute('class', 'success');
// } else {
//     statusEle.innerHTML = "Sorry, you are not eligible to vote";
//     statusEle.setAttribute('class', 'error');
// }

// let heading = document.getElementById('heading');
// heading.style.color = 'red';
// heading.style.fontSize = '50px';


// let containerEle = document.getElementById('container');

// let myHeading = document.createElement('h2');
// myHeading.innerHTML = "Banking Operations";
// myHeading.setAttribute('class', 'title');
// containerEle.appendChild(myHeading);

// const bankOperations = ['Create Account', 'Withdraw', 'Deposit', 'Balance Enquiry', 'Transfer'];

// let ulEle = document.createElement('ul');

// for (item of bankOperations) {
//     let liEle = document.createElement('li');
//     liEle.innerHTML = item;
//     liEle.setAttribute('class', 'list');
//     ulEle.appendChild(liEle);
// }

// containerEle.appendChild(ulEle);

// let productContainer = document.getElementById('productContainer');

// const productsImg = [
//     'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/5897462/1.jpg?4479',
//     'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/5721852/1.jpg?8721',
//     'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/593942/1.jpg?7161',
//     'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/0388921/1.jpg?8975',
//     'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/6404072/1.jpg?3679'
// ];

// for (img of productsImg) {
//     let cardEle = document.createElement('div');
//     cardEle.setAttribute('class', 'card');

//     let imgEle = document.createElement('img');
//     imgEle.setAttribute('src', img);
//     imgEle.setAttribute('alt', 'product');

//     cardEle.appendChild(imgEle);
//     productContainer.appendChild(cardEle);
// }


let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let countEle = document.getElementById('result');

let counter = 1;
countEle.innerHTML = counter;


// handle increment
function increment() {
    counter++;

    countEle.innerHTML = counter;
}

// handle decrement
function decrement() {
    if (counter === 1) {
        return
    } else {
         counter--;
    }

    countEle.innerHTML = counter;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);


// greet logic
let greetAllEle = document.getElementById('greetAll');
let greetBtn = document.getElementById('greetBtn');
let greetingEle = document.getElementById('greetingMsg');
const names = [];

// add to names array func
function addNewName() {
    let username = prompt('Enter your name');
    // add to array
    names.push(username);
}

// print all names and greetings
function greetAll() {
    for (item of names) {
        let greetEle = document.createElement('h3');
        greetEle.innerHTML = item + " Welcome to GMC ATM";

        // add greetEle to greetAllEle
        greetAllEle.appendChild(greetEle);
    }
}

function greetPerson() {
   let keepAdding = 'yes';

    while (keepAdding === 'yes') {
        addNewName();

        // ask question
        keepAdding = prompt("Do you want add another name? ").toLowerCase();
    }
    
    greetAll();
}

greetBtn.addEventListener('click', greetPerson);


// form management logic
const form = document.getElementById('form');

// handle validation
function validation() {
    let name = form.fullName.value;
    let nameError = document.getElementById('nameError');

    if (name.length < 5) { 
        nameError.innerHTML = "Name must be at least 5 characters";
        nameError.setAttribute('class', 'error');
    }
}

// form handler
function formHandler(e) {
    e.preventDefault();


    let name = form.fullName.value;
    let email = form.email.value;
    let phone = form.phone.value;

    let nameError = document.getElementById('nameError');

    
    if (name.length < 5) { 
        nameError.innerHTML = "Name must be at least 5 characters";
        nameError.setAttribute('class', 'error');
    } else {
        nameError.innerHTML = "";
    }

    console.log(name, email, phone);
}


form.addEventListener('submit', formHandler)
