passwordRef.addEventListener("input",() => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = "hindden";
        passwordRef.style.cssText = 
        "border-color: #fe2e2e; background-color: #c2ffc2"
    } else {
        passwordRef.style.cssText = 
        "border-color: #34bd34; background-color: #c2ffc2";
    }
});

submitBtn.addEventListener("mouseover", () => {
    if (!isUsernameValid() || !isPasswordValid()){
        let containerRect = document
        .querySelector(".container")
        getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        if (offset <= 100){
            submitBtn.style.tranform = "translateX(16.25em)";
        }
        else{
            submitBtn.style.transform = "translateX(0)";
        }
    }
});
submitBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visible";
});