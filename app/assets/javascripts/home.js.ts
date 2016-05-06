/// <reference path="typings/tsd.d.ts" />

var dispatcher: WebSocketRails = null

function bindEvents(dispatcher: WebSocketRails) {
   dispatcher.bind('new_message', (message: string) => {
       console.log(message);
   });
}

function bindTimeoutMessage() {
    setTimeout(() => {
        console.log('SEND MSG');
        dispatcher.trigger('new', {message: 'JE SUIS UN TEST'});
    }, 5000);
}

$(document).ready(function() {
    console.log('INIT WEBSOCKET');
    dispatcher = new WebSocketRails("127.0.0.1:3001/websocket");
    bindEvents(dispatcher);
    bindTimeoutMessage();
});