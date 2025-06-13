function generatepassword(length) {
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
let btn= document.querySelector("button");
let input=document.querySelector("#length");
let output=document.querySelector("#password");

btn.addEventListener("click",function(){
    let passlength=input.value;
    let password=generatepassword(passlength);
    console.log(password);
    output.value=password;
})