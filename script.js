const form = document.querySelector(".form")
const button = document.getElementById("submitBtn");
const uname = document.getElementById("username");
const gmail = document.getElementById("Gmail");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('Name',JSON.stringify(uname.value));
    localStorage.setItem('Gmail',JSON.stringify(gmail.value));
    localStorage.setItem('Password',JSON.stringify(password.value));

    alert("submitted successfully");
    uname.value = "";
    gmail.value = "";
    password.value = "";
    
});
