    

function signup(){
    let email = document.querySelector("#email").value
    let pass = document.querySelector("#pass").value
    let cpass = document.querySelector("#cpass").value
    let name = document.querySelector("#name").value

    window.localStorage.setItem("email" , email)
    window.localStorage.setItem("pass" , pass)
    window.localStorage.setItem("cpass" , cpass)
    window.localStorage.setItem("name" , name)

   if(pass == cpass) 
    {
        alert("User Registered Successfully ")
        window.location.assign("./login.html")
    }
    else{
        alert("check password")
    }


}


function login(){
    let email = document.querySelector("#email").value
    let pass = document.querySelector("#pass").value

    let dbuser = window.localStorage.getItem("email" , email)
    let dbpass = window.localStorage.getItem("pass" , pass)


    if(email == dbuser && pass == dbpass)
    {
        alert("login sucessful")
        window.location.assign("./home.html")
    }

    else{
        alert("username and password wrong")
    }
}

// function dis(){
// let logdis = document.querySelector("#logdis");

// // logdis = document.write(window.localStorage.getItem(user).value)

// logdis.innerHTML = Window.localStorage.getItem(user).value;
// }