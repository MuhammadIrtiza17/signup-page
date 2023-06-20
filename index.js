function required()
{
var empt = document.forms["formSub"]["first"].value;
var empt2 = document.forms["formSub"]["last"].value;
var empt3 = document.forms["formSub"]["pass"].value;
var empt4 = document.forms["formSub"]["email"].value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if (empt == "" || empt == null && empt2 == "" || empt == null  && empt3 == "" || empt3 == null  && empt4 ==""|| empt4== null)
{
    document.getElementById("alert1").style.display="block";
    document.getElementById("error1").style.display="block";
    document.getElementById("alert2").style.display="block";
    document.getElementById("error2").style.display="block";
    document.getElementById("alert4").style.display="block";
    document.getElementById("error4").style.display="block";
    document.getElementById("alert3").style.display="block";
    document.getElementById("error3").style.display="block";
    document.getElementsByName('email')[0].placeholder='email@example.com';

    return false;
}
else 
{
alert("Logging in");
return true; 
}
}