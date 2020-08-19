document.getElementById("submit").addEventListener('click',validateFunction);
var error_message = '';
function validateFunction(){
    var fisrt_name_result = validateFirstName();
    var last_name_result = validateLastName(); 
    var phone_no_result = validatePhoneNo(); 
    var email_result = validateEmail();
    var confirm_pwd_result = validateConfirmPwd();
    var valid_pwd = validatePassword();
    var valid_checkpwd = CheckPwd();
    var valid_day = validateDay();
    var valid_month = validateMonth();
    var valid_year = validateYear();
    var valid_hobby = validate_hobby();
    var valid_txt = checkLength();
    var valid_gender = validate_gender();

    if(fisrt_name_result 
       && last_name_result
       && phone_no_result 
       && email_result
       && confirm_pwd_result
       && valid_pwd
       && valid_checkpwd
       && valid_day
       && valid_month
       && valid_year
       && valid_hobby
       && valid_txt
       && valid_gender)
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

function CheckPwd(){
    var confirm_pwd_element = document.getElementById('confirm_pwd');
    var pwd_element = document.getElementById('pwd');
    var confirm_pwd = confirm_pwd_element.value;
    var pwd = pwd_element.value;
    
    if(pwd!=confirm_pwd){
        error_message = 'Confirm Password doesnot match your Password';
        applyError(confirm_pwd_element,error_message);
        return false;
    }
    return true;
}

function validateDay(){
    var element = document.getElementById("day");
    var day = element.value;
    
    if(isEmpty(day) || (day == 'Select Day')){
        error_message = 'Please Select Day';
        document.getElementById("day_error").innerHTML = error_message;
        return false;
    }
     return true;
 }

 function validateMonth(){
    var element = document.getElementById("month");
    var month = element.value;
    
    if(isEmpty(month) || (month == 'Select Month')){
        error_message = 'Please Select Month';
        document.getElementById("month_error").innerHTML = error_message;
        return false;
    }
     return true;
 }

 function validateYear(){
    var element = document.getElementById("year");
    var year = element.value;
    
    if(isEmpty(year) || (year == 'Select Year')){
        error_message = 'Please Select Year';
        document.getElementById("year_error").innerHTML = error_message;
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

function getBirthDate(){
     var day = document.getElementById("day").value;
     var month = document.getElementById("month").value;
     var year = document.getElementById("year").value;
   
     if(day != 'Select Day' && month != 'Select Month' && year != 'Select Year'){
        calculate_Age(day,month,year);
    }
}

function calculate_Age(day,month,year){
        var today = new Date();      
        birthDate = new Date(year,month-1,day);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
       var age_elem =document.getElementById("age");
       age_elem.value = age;    
}

function validate_gender(){
    var elements = document.getElementsByClassName('radio');
    var success = false;
    for (i = 0; i < elements.length; i++)
   {
       if (elements[i].checked)
       {
           success = true;
       }
   }
   if(success!=true){
       error_message = 'Select your Gender';
       document.getElementById("gender_error").innerHTML = error_message;
       return false;
   }

 return true;
}

 function validate_hobby(){
     var elements = document.getElementsByClassName('checkbox');
     var success = false;
     for (i = 0; i < elements.length; i++)
	{
		if (elements[i].checked)
		{
			success = true;
		}
    }
    if(success!=true){
        error_message = 'Select aleast one';
        document.getElementById("interest_error").innerHTML = error_message;
        return false;
    }

  return true;
 }

function checkLength(){
    var textbox = document.getElementById("comment");
    if(textbox.value.length <= 100 && textbox.value.length >= 5){
        return true;
    }
    else{
        error_message ="Your comment is too short, please write more.";
        applyError(textbox,error_message);
        return false;
    }
}

