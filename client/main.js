var socket = io();

var form = document.querySelector('form');

//dit script is voor het koppelen van de data die ingevoerd is aan een element.
//hier kijkt ie of er iets wordt verzonden
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var input = document.querySelector('#message');
  var text = input.value;
  socket.emit('message', text);
  input.value = '';
  
});

//hier pakt ie de verzonden msg en zet het in de form. 
socket.on('message', function(text) {
  if (!text) {
    return;
  }
 
  //hier pakt ie de verschillende plekken waarin de data gestopt moet worden
  var container = document.querySelector('#section');
  var newMessage = document.createElement('p');
  newMessage.innerText = text;
  container.appendChild(newMessage);
  container.scrollTop = container.scrollHeight;
});
