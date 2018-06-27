import createChannel from "src/javascript/cable";

const notifications = createChannel("NotificationsChannel", {
 connected: function() {
   // Called when the subscription is ready for use on the server
   alert('connected');
 },

 disconnected: function() {
   // Called when the subscription has been terminated by the server
 },

 received: function(data) {
   // Called when there's incoming data on the websocket for this channel
   alert('received')
 }
});
