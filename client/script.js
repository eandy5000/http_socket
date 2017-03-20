

const socket = io();

const form = document.querySelector('form');
const message = document.querySelector('#m');
const list = document.querySelector('#messages');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    socket.emit('chat message', message.value);
    message.value = '';
});

socket.on('chat message', (msg) => {
    const el = document.createElement('li');
    
    el.innerText = msg;

    list.appendChild(el);
    
});





