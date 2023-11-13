const password = document.querySelector('#Random');
const length = 12;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function GeneratePassword(){
    let pass = "";
    for(var i = 0 ; i<=length; i++)
    {
        let rand = Math.floor(Math.random()*chars.length);
        pass += chars.substring(rand,rand +1);
    }
    password.value = pass;
}
