/// <reference path="typings/tsd.d.ts" />
var dispatcher = null;
function bindEvents(dispatcher) {
    dispatcher.bind('new_message', function (message) {
        console.log(message);
    });
}
function bindTimeoutMessage() {
    setTimeout(function () {
        console.log('SEND MSG');
        dispatcher.trigger('new', { message: 'JE SUIS UN TEST' });
    }, 5000);
}
$(document).ready(function () {
    console.log('INIT WEBSOCKET');
    dispatcher = new WebSocketRails("127.0.0.1:3001/websocket");
    bindEvents(dispatcher);
    bindTimeoutMessage();
});
//# sourceMappingURL=home.js.js.map