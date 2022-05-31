
// const alll= document.getElementById("alll");
// alll.innerHTML=screen.width;

const form = document.getElementById("messageForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const userMsg = document.getElementById("message");
// const done = document.getElementById("yes");

function done(){
    
}


const errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(username, 0, "Name cannot be blank");
  validate(email, 1, "Please enter your email address");
  validate(userMsg, 2, "Message cannot be blank");
});
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validate = (id, serial, message) => {
 
  if(id.id==="email")
  {
if(id.value.trim()==="")
{
  errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
}
else if(!id.value.match(validRegex))
{
errorMsg[serial].innerHTML="Invalid Email Address";
id.style.border = "2px solid red";
}
else
{
  errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
}
  }
  else
  {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
  }
}
};

