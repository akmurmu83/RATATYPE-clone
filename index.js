// JS for Menu Bar

let expandElem = document.querySelector('#expand');
let startTypingBtn = document.querySelector('#startTypingBtn');
let typingTest = document.querySelector('#typingTest');
let coloredText = document.querySelector('#coloredText');
// console.log(coloredText);
let uncoloredText = document.querySelector('#uncoloredText');
let landingPage = document.querySelector('#landingPage');
let dummyElem = document.querySelector('#dummy');
let menusAndAuth = document.querySelector('#menus-and-auth');
let resultPage = document.querySelector('#resultPage');
let wpm = document.querySelector('#wpm');
let lead = document.querySelector('#lead');

let expanded = false;
const expandOrCollapse = ()=> {
    console.log('check');
    if(expanded) {
        menusAndAuth.style.height = 0;
        expandElem.innerHTML = '+'
        expanded = !expanded;
    } else {
        menusAndAuth.style.height = 'auto';
        expandElem.innerHTML = '-'
        expanded = !expanded;
    }
}

// moveCursor()
inputBox.focus();

let startTime;
let typedText = '';
let updatedDemoText = uncoloredText.innerHTML;
let demoText = uncoloredText.innerHTML;

function checkText(event) {
    // console.log(event.key)

    if(event.key == updatedDemoText.substring(0, 1)) {
        typedText += event.key;
        coloredText.innerHTML = typedText;
        uncoloredText.innerHTML = uncoloredText.innerHTML.substring(1, );
        updatedDemoText = uncoloredText.innerHTML;
        // console.log(typedText, updatedDemoText, coloredText.innerHTML);
    }

    if(typedText.length == 1) {
        startTime = new Date().getTime();
        console.log('timer started!')
    }
    inputBox.value = typedText;

    if(typedText == demoText) {
        let elapsedTime = new Date().getTime() - startTime;
        elapsedTime /= 1000;
        typingTest.style.display = 'none';
        resultPage.style.display = 'flex';
        let result = Math.floor(60 * (11/elapsedTime));
        console.log(result);
        wpm.innerHTML = `${result}`
        lead.innerHTML = `${100-result}% of users`
    }

}

startTypingBtn.addEventListener('click', ()=> {
    typingTest.style.display = 'flex';
    landingPage.style.display = 'none';
    inputBox.focus();
    // inputBox.style.display = 'none';
})
expandElem.addEventListener('click', expandOrCollapse)
inputBox.addEventListener('keyup', checkText)