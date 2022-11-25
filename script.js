let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-Ref");

let isUsernameValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
    const usernameRegex = /^[a-zA-Z][a-zA-z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};
usernameRef.addEventListener("input", () => {
    if (!isUsernameValid()) {
        mesageRef.styke.visibility = "hidden";
        usernameRef.style.cssText = "border-color: #fe2e2e; background-color: #c2ffc2";
    }else {
        usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
    }
    
});
