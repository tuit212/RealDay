
// chat messages

const chatBoxToggle = document.querySelector('.chatbox__wrapper-toggle');
const chatBoxMessage = document.querySelector('.chatbox__wrapper-message');


chatBoxToggle.addEventListener('click' , function() {
    chatBoxMessage.classList.toggle('show');
})

// input
const inputMessage = document.querySelector('.chatbox__wrapper-message-bottom-input');
const chatBoxForm = document.querySelector('.chatbox__wrapper-message-bottom-form');

inputMessage.addEventListener('click' , function() {
    let line = inputMessage.value.split('\n').length;

    if(inputMessage.rows < 6 || line < 6){
        inputMessage.rows = line;
    }


});




const chatBoxContent = document.querySelector('.chatbox__wrapper-message-content');
const chatBoxNoMessage = document.querySelector('.chatbox__wrapper-message-content-no-message');

chatBoxForm.addEventListener('submit' , function(e) {
    e.preventDefault();

    writeMessage();
    setTimeout(autoReply , 1000);
})

function addZero(num){
    return num < 10 ? 'o' + num : num
}

function writeMessage() {
    const today = new Date();

    let message = `
    <div class="chatbox__wrapper-message-content-item sent">
        <span class="chatbox__wrapper-message-content-item-text">
            ${inputMessage.value.trim().replace(/\ n/g, '<br>\n')}
        </span>
        <span class="chatbox__wrapper-message-content-item-time">
            ${addZero(today.getHours())} : ${addZero(today.getMinutes())}
        </span>
    </div>

    
    `
    chatBoxContent.insertAdjacentHTML('beforeend', message);
    inputMessage.focus()
    inputMessage.value = ' '
    chatBoxNoMessage.style.display = 'none'
}

function autoReply() {
    const today = new Date();

    let message = `
    <div class="chatbox__wrapper-message-content-item received">
        <span class="chatbox__wrapper-message-content-item-text">
            Salom ism Asadbek
            sizga qanday yordam bera olaman!
        </span>
        <span class="chatbox__wrapper-message-content-item-time">
            ${addZero(today.getHours())} : ${addZero(today.getMinutes())}
        </span>
    </div>

    
    `
    chatBoxContent.insertAdjacentHTML('beforeend', message);
}

// chat messages