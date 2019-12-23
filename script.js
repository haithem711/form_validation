

var input=document.querySelectorAll('input')
var firstName=document.getElementById('name');
var adress=document.getElementById('adress');
var email=document.getElementById('email');
var password=document.getElementById('password');
var cpassword=document.getElementById('cpassword');
var message=document.getElementById('message');
var error = document.querySelector('.error');
var form  = document.getElementsByTagName('form')[0];
var x = document.getElementById("myBtn");

x.addEventListener("click", () => checkEmail(event));






function checkEmail(event) {
    event.preventDefault()
    var passw = /^[A-Za-z]\w{7,14}$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (firstName.value==""|| adress.value ==""|| email.value==""|| password.value== ""|| message.value=="") {
        alert("User  should not be empty ");
        firstName.focus; adress.focus; email.focus; password.focus; message.focus;
        return false;
    } else if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
        else if (!passw.test(password.value)) {
            alert('Password invalid');
            password.focus;
            return false;
        } else if (cpassword.value!==password.value){
            alert("confirm invalid");
            cpassword.focus;
            return false;
        } else {
            firstName.value =""
            adress.value =""
            email.value=""
            password.value= ""
            cpassword.value= ""
            message.value=""
            alert('Thanks for your feedback!')
        }
}