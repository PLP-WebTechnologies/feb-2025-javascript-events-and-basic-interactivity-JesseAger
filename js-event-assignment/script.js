const button = document.getElementById("button")
const form = document.getElementById("userForm")
const username = document.getElementById("username")
const phone = document.getElementById("phone")
const password = document.getElementById("password")


username.addEventListener('input', function(){
    const val = username.value;
    if (val.length < 5){
        username.setCustomValidity("Name must be at least 5 letters");
    } else{
        username.setCustomValidity("");
    }
});

button.addEventListener('click', () => {
    alert ('Submitted successfully')
});

phone.addEventListener('input', function(){
    const val = phone.value;
    if (val.length>10 && val.length<10){
        phone.setCustomValidity("Phone number must be exactlyy 10 digits");
    } else{
        phone.setCustomValidity("");
    }
});