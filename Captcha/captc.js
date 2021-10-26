//captcha genrator

function captchaGenrator(){    // following numbers and alphabet arrange in own way------
    let alpha = new Array('A','B','C','D','E','F','G','H','a','b','c','d','e','f','z','x','y','q','w','Z','Y','M','m','0','2','1','3',
    'r','R','u','U','4','5','j','J','6','7','8','9','p','P','s','S','g','h','o','O','n','N','v','V','i','W','I','l','L','k','K','t','T');
         
    let a = alpha[Math.floor(Math.random() * alpha.length)];
    let b = alpha[Math.floor(Math.random() * alpha.length)];
    let c = alpha[Math.floor(Math.random() * alpha.length)];
    let d = alpha[Math.floor(Math.random() * alpha.length)];
    let e = alpha[Math.floor(Math.random() * alpha.length)];

    let result = a+" "+ b +" "+ c +" "+ d +" "+ e;


    document.getElementById('createCaptcha').value = result;
}

//isvalid

function isvalid(){
    let one = removeSpaces(document.getElementById('createCaptcha').value);
    let two = removeSpaces(document.getElementById('inputCaptcha').value);

    if(one == two){
        return "correct!!! \n Click OK>>";
    }
    else{
        return "Incorrect Captcha!!";
    }
    

}
//remove spaces

function removeSpaces(s){
    return s.split(" ").join('');
}