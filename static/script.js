function appendMessage(sender, text) {
    var chatbox = document.getElementById('chatbox');
    var message = document.createElement('div');
    message.className = sender + '-message';
    message.innerText = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage('user', userInput);
        document.getElementById('user-input').value = '';
        // Send userInput to server (AJAX or WebSocket)
        // Receive bot's response and call appendMessage('bot', response);
    }
}
