
// Navbar (All)
function dropDown(){
    var declaration = document.styleSheets[0]
    const drop = [...declaration.cssRules].find((r) => r.selectorText === "nav #dropDown")
    var body = document.getElementsByTagName("body")

    let x = document.getElementById("dropDown")
    let image = document.getElementById("burgerFoto")
    
    if(drop.style.height === "100px"){
        image.src = '/assets/Project (20240410062000).png'
        image.style.backgroundColor = "rgba(0,0,0,0)"
        drop.style.setProperty("height", "0px")
        
    }else{
        image.src = '/assets/silangPutih.png'
        image.style.backgroundColor = "rgba(211,18,69,255)"
        image.style.borderRadius = "10px"
        drop.style.setProperty("height", "100px")
    }
}
   
// Reference: https://www.youtube.com/watch?v=HRpjAGT7X4Y&t=817s&pp=ygUSY2F0ZWdvcnkgbWVudSBodG1s
// Menu Category Section (Recipes)
function toggleActive(x){
    arr = document.getElementsByClassName("btn")
    for(i = 0 ; i < 4 ; i++){
        let temp = arr[i]
        if(temp.className == "btn active")
        {
            temp.className = "btn"
            break
        }
    }

    let button = document.getElementsByClassName("btn")[x]
    button.className += " active"
}

function filterMenu(e){
    let x,i;
    x = document.getElementsByClassName("item")
    count = document.getElementById("counter")
    category = document.getElementById("category")
    if(e == 'all'){
        toggleActive(0)
        count.innerText = "9"
        category.innerText = "All"
        e = ""
    }else{
        if(e == 'Breakfast'){
            toggleActive(1)
            count.innerText = "3"
            category.innerText = "Breakfast"
        }
        else if(e == 'Snacks'){
            toggleActive(2)
            count.innerText = "3"
            category.innerText = "Snacks"
        }
        else if(e == 'Meals'){
            toggleActive(3)
            count.innerText = "3"
            category.innerText = "Meals"  
        }
    }

    for(i = 0 ; i < x.length ; i++){
        removeClass(x[i], "show")
        if(x[i].className.indexOf(e) > -1){
            addClass(x[i], "show")
        }
    }
}

function addClass(element, name){
    var i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(" ")
    for(i = 0 ; i < arr2.length ; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2
    arr1 = element.className.split(" ")
    arr2 = name.split(" ")
    for(i = 0 ; i < arr2.length ; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]) , 1)
        }
    }
    element.className = arr1.join(" ")
}

// References: https://www.youtube.com/watch?v=oXLha6A4gjc&pp=ygURY2Fyb3VzZWwgaHRtbCBjc3M%3D
// Timeline progress line (About Us)
function changeProgress(idx){
    var declaration = document.styleSheets[0]
    const line = [...declaration.cssRules].find((r) => r.selectorText === ".Timeline-mark #line-process")

    if(idx == 0){
        line.style.setProperty("width","5%")
    }
    else if(idx == 1){
        line.style.setProperty("width","25%")
    }
    else if(idx == 2){
        line.style.setProperty("width","50%")
    }
    else if(idx == 3){
        line.style.setProperty("width","75%")
    }
    else if(idx == 4){
        line.style.setProperty("width","100%")
    }

    
    for(i = 4 ; i >= idx ; i--){
        let temp = document.getElementsByTagName("li")[i]
        let tempDesc = document.getElementsByClassName("desc-section")[i]

        if(temp.className == "active"){
            temp.classList.remove("active");
            tempDesc.id = ""
        }
    }
    
    for(i = 0 ; i <= idx ; i++){
        let temp = document.getElementsByTagName("li")[i]
        let tempDesc = document.getElementsByClassName("desc-section")[i]

        temp.className = "active"

        if(i == idx){
            tempDesc.id = "active"
        }else{
            tempDesc.id = ""
        }

    }
}


// Form Validation and Algorithm (Contact Us)
let checkFirstName = false
let checkLastName = false
let checkEmail = false
let checkPhone = false
let checkMessage = false

let verifyInquiry = false
let numero1 = Math.floor(Math.random() * 10) + 1
let numero2 = Math.floor(Math.random() * 10) + 1

const operators = ['+', '-']
let operator = operators[Math.floor(Math.random() * 2)]

let result = 0

if(numero1 >= numero2){
    result = eval(`${numero1} ${operator} ${numero2}`)
}else{
    result = eval(`${numero2} ${operator} ${numero1}`)
}

function onFormSubmit(e){
    e.preventDefault()

    if(checkFirstName == true && checkLastName == true && checkEmail == true && checkPhone == true && checkMessage == true){
        if(numero1 >= numero2){
            document.getElementById("num1").innerHTML = `<b>${numero1}</b>`
            document.getElementById("num2").innerHTML = `<b>${numero2}</b>`
        }else{
            document.getElementById("num1").innerHTML = `<b>${numero2}</b>`
            document.getElementById("num2").innerHTML = `<b>${numero1}</b>`
        }

        document.getElementById("operator").innerHTML = `<b>${operator}</b>`       
        document.getElementsByClassName("item Verify")[0].style.setProperty("display","block")
    
        if(Number(e.target.children[1].children[5].children[1].children[1].value) == result){
            verifyInquiry = true
        }else{
            alert("Please answer the verify question correctly!")
        }
    }else if(checkFirstName == true && checkLastName == true && checkEmail == true && checkPhone == true && checkMessage == false){
        alert("Please specify your message/request specifically [minimum 3 words]")
    }else{
        alert("There are still credentials to work on!")
    }

    if(verifyInquiry == true){
        const firstName     = e.target.children[1].children[0].children[1].value
        const LastName      = e.target.children[1].children[1].children[1].value
        const emailValue    = e.target.children[1].children[2].children[1].value
        const phoneNumber   = e.target.children[1].children[3].children[1].value
        const message       = e.target.children[1].children[4].children[1].value
    
        console.log(firstName, LastName, emailValue, phoneNumber, message);
        alert("Data have been sent!")
    }
}

let hasButtonBeenClicked = false
let indexTemp = null

//reference: https://www.geeksforgeeks.org/how-to-validate-email-address-without-using-regular-expression-in-javascript/
function validateEmailAddress(emailAddress) {
    let atSymbol = emailAddress.indexOf("@");
    let dotSymbol = emailAddress.lastIndexOf(".");
    let spaceSymbol = emailAddress.indexOf(" ");
    let mailName = emailAddress.indexOf("com")

    let emailUsername = emailAddress.substr(0, atSymbol)
    let emailUsername_isNotValid = false

    // email_username could be allowed to have only underscores and number 
    for(let i = 0; i < emailUsername.length ; i++){
        if(emailUsername.charAt(i) == "'" ||emailUsername.charAt(i) == "\"" || emailUsername.charAt(i) == "!" || emailUsername.charAt(i) == "@" || emailUsername.charAt(i) == "$"
        || emailUsername.charAt(i) == "%" || emailUsername.charAt(i) == "^" || emailUsername.charAt(i) == "&" || emailUsername.charAt(i) == "*" || emailUsername.charAt(i) == "("
        || emailUsername.charAt(i) == ")" || emailUsername.charAt(i) == "-" || emailUsername.charAt(i) == "+" || emailUsername.charAt(i) == "=" || emailUsername.charAt(i) == "{"
        || emailUsername.charAt(i) == "}" || emailUsername.charAt(i) == "[" || emailUsername.charAt(i) == "]" || emailUsername.charAt(i) == "\\" || emailUsername.charAt(i) == "|"
        || emailUsername.charAt(i) == ":" || emailUsername.charAt(i) == ";" || emailUsername.charAt(i) == "," || emailUsername.charAt(i) == "<" || emailUsername.charAt(i) == "." 
        || emailUsername.charAt(i) == ">" || emailUsername.charAt(i) == "/" || emailUsername.charAt(i) == "?"){
            emailUsername_isNotValid = true
            break
        }
    }
    
    if ((atSymbol != -1) && (atSymbol != 0) && (dotSymbol != -1) && (dotSymbol != 0) && (dotSymbol > atSymbol + 1) && (emailAddress.length > dotSymbol + 1) && (mailName != -1) && (spaceSymbol == -1) && (emailUsername_isNotValid == false)) {
        document.getElementsByTagName("input")[2].style.backgroundColor = "rgba(0, 255, 0, 0.1)"
        document.getElementsByClassName("error Email")[0].innerHTML = "Email address is <b>valid</b>."
        return true;
    }else{
        document.getElementsByTagName("input")[2].style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        document.getElementsByClassName("error Email")[0].innerHTML = "Error! Email address is not valid."
        return false;
    }
}

function validateName(nameInput){
    let numberDetect = false
    let symbolDetect = false

    for(let i = 0 ; i < 10; i++){
        if(nameInput.value.indexOf(i.toString()) > 0){
            numberDetect = true
            break
        }
    }

    // reference : https://coderrocketfuel.com/article/how-to-check-if-a-character-is-a-letter-using-javascript
    for(let i = 0; i < nameInput.value.length ; i++){
        if(nameInput.value.charAt(i).toLowerCase() != nameInput.value.charAt(i).toUpperCase() == false){
            symbolDetect = true
            break
        }
    }

    if(numberDetect == true || symbolDetect == true){
        nameInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        if(indexTemp == 0){
            document.getElementsByClassName("error FirstName")[0].innerHTML = "A First Name should contain only letters."
            return false
        }else{
            document.getElementsByClassName("error LastName")[0].innerHTML = "A Last Name should contain only letters."
            return false
        }
    }else if(nameInput.value.length < 2){
        nameInput.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        if(indexTemp == 0){
            document.getElementsByClassName("error FirstName")[0].innerHTML = "A First Name should contain at least 2 letters."
            return false
        }else{
            document.getElementsByClassName("error LastName")[0].innerHTML = "A Last Name should contain at least 2 letters."
            return false
        }
    }else{
        nameInput.style.backgroundColor = "rgba(0, 255, 0, 0.1)"
        if(indexTemp == 0){
            document.getElementsByClassName("error FirstName")[0].innerHTML = "First Name is <b>valid</b>."
            return true
        }else{
            document.getElementsByClassName("error LastName")[0].innerHTML = "Last Name is <b>valid</b>."
            return true
        }
    }
}

function validatePhone(phoneNumber){
    if(isNaN(phoneNumber.value)){
        document.getElementsByClassName("error PhoneNum")[0].innerHTML = "A phone number should only consist of numbers!"
        phoneNumber.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        return false
    }else if(phoneNumber.value.length < 8 || phoneNumber.value.length > 13){
        document.getElementsByClassName("error PhoneNum")[0].innerHTML = "A phone number should consist between 8 to 13 digits!"
        phoneNumber.style.backgroundColor = "rgba(255, 0, 0, 0.1)"
        return false
    }else{
        phoneNumber.style.backgroundColor = "rgba(0, 255, 0, 0.1)"
        document.getElementsByClassName("error PhoneNum")[0].innerHTML = "Phone Number is <b>valid</b>."
        return true
    }
}

// reference: https://stackoverflow.com/questions/18679576/counting-words-in-string
function validateMessage(){
    let message = document.getElementsByTagName("textarea")[0].value
    if(message != ''){
        if(message.split(' ').filter(function(n) { return n != '' }).length >= 3){
            checkMessage = true
        }else{
            checkMessage = false
        }
    }
}

window.addEventListener("click", () => { 
    if(hasButtonBeenClicked && document.getElementsByTagName("input")[indexTemp].value != "") {
        
        if(indexTemp == 2){
            checkEmail = validateEmailAddress(document.getElementsByTagName("input")[indexTemp].value)
        }else if(indexTemp < 2){
            if(indexTemp == 0){
                checkFirstName = validateName(document.getElementsByTagName("input")[indexTemp])
            }else{
                checkLastName = validateName(document.getElementsByTagName("input")[indexTemp])
            }
        }else if(indexTemp == 3){
            checkPhone = validatePhone(document.getElementsByTagName("input")[indexTemp])
        }

        if(indexTemp == 0 && checkFirstName == true){
            document.getElementsByTagName("span")[0].style.opacity = 0
        }else if(indexTemp == 1 && checkLastName == true){
            document.getElementsByTagName("span")[1].style.opacity = 0
        }else if(indexTemp == 2 && checkEmail == true){
            document.getElementsByTagName("span")[2].style.opacity = 0
        }else if(indexTemp == 3 && checkPhone == true){
            document.getElementsByTagName("span")[3].style.opacity = 0
        }else{
            document.getElementsByTagName("span")[indexTemp].style.opacity = 1
        }
        hasButtonBeenClicked = false
    }else if(hasButtonBeenClicked && document.getElementsByTagName("input")[indexTemp].value == ""){
        if(indexTemp == 2){
            document.getElementsByTagName("input")[2].style.backgroundColor = "rgba(255, 255, 255, 0)"
            document.getElementsByClassName("error Email")[0].innerHTML = "example: test@gmail.com"
            checkEmail = false
        }else if(indexTemp < 2){
            document.getElementsByTagName("input")[indexTemp].style.backgroundColor = "rgba(255, 255, 255, 0)"
            if(indexTemp == 0){
                document.getElementsByClassName("error FirstName")[0].innerHTML = "example: Daryl"
                checkFirstName = false
            }else{
                document.getElementsByClassName("error LastName")[0].innerHTML = "example: Lorenz"
                checkFirstName = false
            }
        }else if(indexTemp == 3){
            document.getElementsByTagName("input")[indexTemp].style.backgroundColor = "rgba(255, 255, 255, 0)"
            document.getElementsByClassName("error PhoneNum")[0].innerHTML = "example: 088991234567"
            checkPhone = false
        }

        document.getElementsByTagName("span")[indexTemp].style.opacity = 1
    }
})

function changeInputAsterisk(e, idx){
    if(hasButtonBeenClicked && document.getElementsByTagName("input")[indexTemp].value != ""){
        if(indexTemp == 2){
            checkEmail = validateEmailAddress(document.getElementsByTagName("input")[indexTemp].value)
        }else if(indexTemp < 2){
            if(indexTemp == 0){
                checkFirstName = validateName(document.getElementsByTagName("input")[indexTemp])
            }else{
                checkLastName = validateName(document.getElementsByTagName("input")[indexTemp])
            }
        }else if(indexTemp == 3){
            checkPhone = validatePhone(document.getElementsByTagName("input")[indexTemp])
        }
        
        if(indexTemp == 0 && checkFirstName == true){
            document.getElementsByTagName("span")[0].style.opacity = 0
        }else if(indexTemp == 1 && checkLastName == true){
            document.getElementsByTagName("span")[1].style.opacity = 0
        }else if(indexTemp == 2 && checkEmail == true){
            document.getElementsByTagName("span")[2].style.opacity = 0
        }else if(indexTemp == 3 && checkPhone == true){
            document.getElementsByTagName("span")[3].style.opacity = 0
        }else{
            document.getElementsByTagName("span")[indexTemp].style.opacity = 1
        }
        hasButtonBeenClicked = false
    }else if(hasButtonBeenClicked && document.getElementsByTagName("input")[indexTemp].value == ""){
        
        if(indexTemp == 2){
            document.getElementsByTagName("input")[2].style.backgroundColor = "rgba(255, 255, 255, 0)"
            document.getElementsByClassName("error Email")[0].innerHTML = "example: test@gmail.com"
        }else if(indexTemp < 2){
            document.getElementsByTagName("input")[indexTemp].style.backgroundColor = "rgba(255, 255, 255, 0)"
            if(indexTemp == 0){
                document.getElementsByClassName("error FirstName")[0].innerHTML = "example: Daryl"
            }else{
                document.getElementsByClassName("error LastName")[0].innerHTML = "example: Lorenz"
            }
        }else if(indexTemp == 3){
            document.getElementsByTagName("input")[indexTemp].style.backgroundColor = "rgba(255, 255, 255, 0)"
            document.getElementsByClassName("error PhoneNum")[0].innerHTML = "example: 088991234567"
            checkPhone = false
        }

        document.getElementsByTagName("span")[indexTemp].style.opacity = 1
    }

    e.stopPropagation()
    indexTemp = idx
    hasButtonBeenClicked = true
    
}