document.getElementById("submit").addEventListener('click',validateFunction);
var error_message = '';
function validateFunction(){
    var fisrt_name_result = validateFirstName();
    var last_name_result = validateLastName(); 
    var phone_no_result = validatePhoneNo(); 
    var email_result = validateEmail();
    var confirm_pwd_result = validateConfirmPwd();
    var valid_pwd = validatePassword();
    if(fisrt_name_result 
       && last_name_result
       && phone_no_result 
       && email_result
       && confirm_pwd_result
       && valid_pwd
       && valid_age)
    {
        window.location.href = "http://www.w3schools.com";
    }
}

function validateFirstName(){
    var element = document.getElementById('firstname');
    var firstname = element.value;
    if(isEmpty(firstname)){
        error_message = 'Firstname is required';
        applyError(element,error_message);
        return false;
    }
    return true;
}

function validateLastName(){
    var element = document.getElementById('lastname');
    var lastname = element.value;
    if(isEmpty(lastname)){
        error_message = 'Lastname is required';
        applyError(element,error_message);
        return false;
    }
    return true;
}

function validateEmail(){
    var element = document.getElementById('email');
    var email = element.value;
    if(isEmpty(email)){
        error_message = 'Email is required';
        applyError(element,error_message);
        return false;
    }
    return true; 
}

function validatePhoneNo(){
    var element = document.getElementById('phone_no');
    var phone_no = element.value;
    if(isEmpty(phone_no)){
        error_message = 'Phone No is required';
        applyError(element,error_message);
        return false;
    }
    return true;
}  

function validatePassword(){
    var element = document.getElementById('pwd');
    var pwd = element.value;
    if(isEmpty(pwd)){
        error_message = 'Password is required';
        applyError(element,error_message);
        return false;
    }
    return true;
}  
  
function validateConfirmPwd(){
    var element = document.getElementById('confirm_pwd');
    var confirm_pwd = element.value;
    if(isEmpty(confirm_pwd)){
        error_message = 'Password Confirmation is required';
        applyError(element,error_message);
        return false;
    }
    return true;
}

function isEmpty(value){
    if(value == '' || value == undefined || value == null){
        return true;
    }
    return false;
}

function applyError(element,message){
    element.style.borderColor = 'red';
    element.nextElementSibling.innerHTML = message;
}
