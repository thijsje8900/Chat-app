var socket = io();

var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var input = document.querySelector('#message');
  var text = input.value;
  socket.emit('message', text);
  input.value = '';
});

socket.on('message', function(text) {
  if (!text) {
    return;
  }
  var container = document.querySelector('#section');
  var newMessage = document.createElement('p');
  newMessage.innerText = text;
  container.appendChild(newMessage);

  container.scrollTop = container.scrollHeight;
});
