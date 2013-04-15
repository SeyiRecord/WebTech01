$(document).ready(function() {
    $("#myForm").validate({
            rules: {        	        		
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    }
                    }, 
            messages: {
                name: " *Enter Name*",
                email: " *Enter Email*"
            }
    });
});

/*
function validateRequired(field, alerttxt)
{
    if(field == "" || field == null)
    { alert(alerttxt);
        return false;
    }
    else {
        return true;
    }
}

function validateEmail(field, alerttxt)
{
    if(field == "" || field == null)
    { alert(alerttxt);
        return false;
    }
    else {
        return true;
    }
}
function validateForm(){
    if(false == validateRequired(
        document.forms["myForm"]
        ["name"].value, "Name must be supplied"))
    {
        return false;}
    
    if(false == validateEmail(
        document.forms["myForm"]
        ["email"].value, "Email must be supplied"))
    {
        return false;}
 } */

