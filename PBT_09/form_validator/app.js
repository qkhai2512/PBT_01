const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const phone = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");

let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function checkForm() {
    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

fullname.addEventListener("input", () => {

    const msg = document.getElementById("nameMsg");

    if(fullname.value.length >= 2 &&
       fullname.value.length <= 50){

        msg.textContent = "✅ Hợp lệ";
        msg.className = "success";
        validName = true;

    }else{

        msg.textContent = "❌ Tên 2-50 ký tự";
        msg.className = "error";
        validName = false;
    }

    checkForm();
});

email.addEventListener("input", () => {

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const msg =
    document.getElementById("emailMsg");

    if(regex.test(email.value)){

        msg.textContent = "✅ Email hợp lệ";
        msg.className = "success";
        validEmail = true;

    }else{

        msg.textContent = "❌ Email không hợp lệ";
        msg.className = "error";
        validEmail = false;
    }

    checkForm();
});

password.addEventListener("input", () => {

    const bar =
    document.getElementById("strengthBar");

    const msg =
    document.getElementById("passwordMsg");

    const value = password.value;

    if(value.length < 8){

        bar.style.width = "33%";
        bar.style.background = "red";

        msg.textContent = "Yếu";
        validPassword = false;

    }else if(
        /[A-Za-z]/.test(value) &&
        /\d/.test(value)
    ){

        bar.style.width = "66%";
        bar.style.background = "orange";

        msg.textContent = "Trung bình";
        validPassword = true;

    }

    if(
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /\d/.test(value) &&
        /[^A-Za-z0-9]/.test(value)
    ){

        bar.style.width = "100%";
        bar.style.background = "green";

        msg.textContent = "Mạnh";
        validPassword = true;
    }

    checkForm();
});

confirmPassword.addEventListener("input", () => {

    const msg =
    document.getElementById("confirmMsg");

    if(confirmPassword.value === password.value){

        msg.textContent = "✅ Khớp";
        msg.className = "success";
        validConfirm = true;

    }else{

        msg.textContent = "❌ Không khớp";
        msg.className = "error";
        validConfirm = false;
    }

    checkForm();
});

phone.addEventListener("input", () => {

    let value =
    phone.value.replace(/\D/g,'');

    if(value.length > 10){
        value = value.substring(0,10);
    }

    if(value.length > 4){
        value =
        value.slice(0,4)
        + "-"
        + value.slice(4);
    }

    if(value.length > 8){
        value =
        value.slice(0,8)
        + "-"
        + value.slice(8);
    }

    phone.value = value;

    const pure =
    value.replace(/\D/g,'');

    const msg =
    document.getElementById("phoneMsg");

    if(pure.length === 10){

        msg.textContent = "✅ Hợp lệ";
        msg.className = "success";
        validPhone = true;

    }else{

        msg.textContent = "❌ Cần 10 số";
        msg.className = "error";
        validPhone = false;
    }

    checkForm();
});

document
.getElementById("registerForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    document
    .getElementById("userInfo")
    .innerHTML = `
        <strong>Tên:</strong> ${fullname.value}<br>
        <strong>Email:</strong> ${email.value}<br>
        <strong>SĐT:</strong> ${phone.value}
    `;

    document
    .getElementById("successModal")
    .classList.remove("hidden");
});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

    document
    .getElementById("successModal")
    .classList.add("hidden");
});