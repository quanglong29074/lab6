//let id = document.getElementById('username'),
 //email = document.getElementById('email'),
 //password = document.getElementById('password');

 //let errorMsg = document.getElementsByClassName("error"),
   // successIcon = document.getElementsByClassName("success-icon"),
    //failureIcon = document.getElementsByClassName("failure-icon");

    let id = (id) => document.getElementById(id);
    let classes =(classes) =>document.getElementsByClassName(classes);
   
    let username = id("username"),
       password = id("password"),
       email = id("email"),
       errorMsg = classes("error"),
       successIcon = classes("success-icon"),
       failureIcon = classes("failure-icon");
   
   form.addEventListener("submit", (e) =>{
       e.preventDefault();//callback() trong js
       engine(username,0,"username cannot be blank!");
       engine(email,1, "email cannot be blank!");
       engine(password,2, "password cannot be blank!");
   });

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style,opacity="1";
        successIcon[serial].style,opacity="0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
};