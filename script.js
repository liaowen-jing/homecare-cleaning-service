
const menuToggle =document.querySelector("#menu-toggle");
const navigation =document.querySelector("#navigation");
const links = navigation.querySelectorAll("a");

menuToggle.addEventListener("click",() => {
    navigation.classList.toggle("is-open");
});

links.forEach(link =>{
link.addEventListener("click",() => {
  navigation.classList.remove("is-open");
});
});

const form =document.querySelector("#booking-form");
const input =document.querySelector("#name");
const email =document.querySelector("#email");
const select =document.querySelector("#service");
const btn =document.querySelector("#booking-form button")
const message =document.querySelector("#message");

form.addEventListener("submit",(event)=>{
 event.preventDefault();
 if(!form.checkValidity()){
    form.reportValidity();
    return;
 }
 message.textContent="";

 const inputValue = input.value;
 const emailValue = email.value;
 const serviseValue =select.value;
 if(inputValue.trim() === ""){
    message.textContent ="Please enter you name.";
    return;
 }else if(emailValue.trim() === "" || !emailValue.includes("@")){
    message.textContent ="Please enter a valid email.";
    return;
 }else if(serviseValue === ""){
    message.textContent ="Please select a servise.";
    return;
 }

 message.textContent="Booking submited successfully!";
 form.reset();
 
});