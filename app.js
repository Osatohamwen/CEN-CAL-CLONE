let checkedBox = document.querySelectorAll('.check-box-1');
let checkedImg = document.querySelector('.checked-img');
let addClick = document.querySelectorAll('#circle-add');
let invisible = document.querySelector('.invisible');
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const email = document.getElementById('email');
const carType = document.getElementById('car-type');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const nameError = document.getElementById('name-error');
const carError = document.getElementById('car-details')


checkedBox.forEach((item) => {
    item.addEventListener('click',(e) => {
        item.style.display = "none";
        checkedImg.style.display = "flex"
    })
});

addClick.forEach((item) => {
    let add = false;
    item.addEventListener('click',(e) => {
        if (!add){
            invisible.style.display = "flex";
            add = true;
        }else{
            invisible.style.display = "none";
            add = false;
        }
    })
});

let open = false;
hamburger.addEventListener('click',(e) => {
    if(!open){
        navItems.style.display = "flex";
        open = true;
    }
    else{
        navItems.style.display = "none";
        open = false;
    }
});

form.addEventListener('submit', (e) => {
    let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(name.value === '' || name.value == null){
        e.preventDefault()
        nameError.innerHTML = "Your Name is required";
    }else{
        nameError.innerHTML = "";
    }
    if(phone.value.length != 11){
        e.preventDefault()
        phoneError.innerHTML = "Valid Phone Number is required";

    }else{
        phoneError.innerHTML = "";
    }
    if(!email.value.match(emailCheck)){
        e.preventDefault()
        emailError.innerHTML = "Valid Email is required";
    } else{
        emailError.innerHTML = "";
    }
    if(carType.value ==='' || carType.value == null){
        e.preventDefault()
        carError.style.color = 'red';
    }else{
        carError.style.color = 'rgba(109, 125, 139, 1)'
    }

})