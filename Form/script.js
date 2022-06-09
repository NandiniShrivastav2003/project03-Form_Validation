

function validate(){
    let user=document.getElementById('username').value;
    if(user.length == '0'){
        document.getElementById('username').classList.add("error");
        document.getElementById('username').classList.replace("success","error");

        document.getElementById('chk_u').innerHTML="enter name";
    }
    else{
        document.getElementById('username').classList.remove("error");
        document.getElementById('username').classList.add("success");
        document.getElementById('chk_u').innerHTML="username exists";
    }
    isEmail(document.getElementById('email').value);
    if(isEmail(document.getElementById('email').value) == true){
        document.getElementById('email').classList.add("success");
        document.getElementById('email').classList.replace("error","success");
        document.getElementById('chk_e').innerHTML="valid email";
    }
    else{
        document.getElementById('email').classList.add("error");
        document.getElementById('chk_e').innerHTML="invalid email";
    }
    isPassword(document.getElementById('password').value);
    if (isPassword(document.getElementById('password').value) == true){
        console.log('pass');
        document.getElementById('password').classList.add("success");
        document.getElementById('password').classList.replace("error","success");
        document.getElementById('chk_p').innerHTML="password success";
    }
    else{
        console.log('fail');
        document.getElementById('password').classList.remove("success");
        document.getElementById('password').classList.add("error");
        document.getElementById('chk_p').innerHTML="plz enter a valid password";
    }
    if(check_pass(document.getElementById('password').value,document.getElementById('confirm_password').value) == true){
        document.getElementById('confirm_password').classList.add("success");
        document.getElementById('confirm_password').classList.replace("error","success");
        document.getElementById('chk_pm').innerHTML="password matched";
    }
    else{
        document.getElementById('confirm_password').classList.remove("success");
        document.getElementById('confirm_password').classList.add("error");
        document.getElementById('chk_pm').innerHTML="password did't match!!";
    }
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
function isPassword(str){
    if (str.match(/[a-z]/g) && str.match(
        /[A-Z]/g) && str.match(
        /[0-9]/g) && str.match(
        /[^a-zA-Z\d]/g) && str.length >= 8){
            return true;
        }
        return false;
}
function check_pass(pass,check){
    if(pass == check){
        return true;
    }
    return false;
}
