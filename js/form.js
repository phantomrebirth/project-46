let email = document.getElementById("email");
let password = document.getElementById("password");
let eyeIcon = document.getElementById("eye0");
let inputBox1 = document.getElementById("inputBox1");
let inputBox2 = document.getElementById("inputBox2");

function validated(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let email_error = document.getElementById('email_error');
    let password_error = document.getElementById('password_error');
    let inputBox1 = document.getElementById("inputBox1");
    let inputBox2 = document.getElementById("inputBox2");
    
    // email.style.border = "1px solid #ccc";
    // email_error.style.display = "none";
    
    // password.style.border = "1px solid #ccc";
    // password_error.style.display = "none";
    
    email.addEventListener("input", email_verify);
    password.addEventListener("input", password_verify);
    
    if (email && email.value.length < 9) {
        inputBox1.classList.add("input-error");
        inputBox1.classList.remove("input-normal");
        email_error.style.display = "block";
        email.focus();
        return false;
    }else {(email && email.value.length >= 9 )
        inputBox1.classList.remove("input-error");
        inputBox1.classList.add("input-normal");
        email_error.style.display = "none";
    }
    
    if (password && password.value.length < 8) {
        inputBox2.classList.add("input-normal");
        inputBox2.classList.remove("input-error");
        password_error.style.display = "block";
        password.focus();
        return false;
    }else{
        inputBox2.classList.remove("input-error");
        inputBox2.classList.add("input-normal");
        password_error.style.display = "none";
    }
}
eyeIcon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeIcon.src = "eye.png";
    }else{
        password.type = "password";
        eyeIcon.src = "eye-closed.png";
    }
}
function email_verify(){
    if (email && email.value.length >= 9) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function password_verify(){
    if (password && password.value.length >= 8) {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}


function submitForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const data = {
        email: email,
        password: password
    };

    fetch("https://oursectionapp-apitest.onrender.com/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post successful:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}