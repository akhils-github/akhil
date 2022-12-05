function validation(){
    var my_name = document.getElementById("my_name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_msg = document.getElementById("error_msg");
    var text;

    error_msg.style.display = "block";
    if(my_name.length <5){
        text = "Please enter your name";
        error_msg.innerHTML = text;
        return false;
    }
    if(email.length == "" ){
        text = "Please enter your email";
        error_msg.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1){
        text = "Please enter valid email id eg:abc@gmail.com";
        error_msg.innerHTML = text;
        return false;
    }
    // if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ){
    //     text = "Please enter a valid email id";
    //     error_msg.innerHTML = text;
    //     return false;
    // }
    if(subject.length == ""){
        text = "Please enter subject";
        error_msg.innerHTML = text;
        return false;
    }
    if(subject.length <10){
        text = "Please mention subject more clearly";
        error_msg.innerHTML = text;
        return false;
    }
    if(message.length == ""){
        text = "Please enter your message ";
        error_msg.innerHTML = text;
        return false;
    }
    if(message.length <= 12){
        var required = 30;
        var left = required-message.length;
        if(left > 0){
            text = left + ' more characters required';
            error_msg.innerHTML = text;
        }
        return false;
    }
    return true;
}