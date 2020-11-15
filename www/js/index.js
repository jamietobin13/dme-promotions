/*
|--------------------------------------------------------------------------
| APP START
|--------------------------------------------------------------------------
*/

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
    },
    // deviceready Event Handler
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        alert('device ready');
        app.receivedEvent('deviceready');
        
        /*
        window.plugins.PushbotsPlugin.initialize("PUSHBOTS_APPLICATION_ID", {"android":{"sender_id":"GOOGLE_SENDER_ID"}});
        
        // Only with First time registration
        window.plugins.PushbotsPlugin.on("registered", function(token){
            console.log("Registration Id:" + token);
        });

        //Get user registrationId/token and userId on PushBots, with evey launch of the app even launching with notification
        window.plugins.PushbotsPlugin.on("user:ids", function(data){
            console.log("user:ids" + JSON.stringify(data));
        });
        
        
        // Should be called once app receive the notification [foreground/background]
        window.plugins.PushbotsPlugin.on("notification:received", function(data){
            console.log("received:" + JSON.stringify(data));
    
            //iOS: [foreground/background]
            console.log("notification received from:" + data.cordova_source);
            //Silent notifications Only [iOS only]
            //Send CompletionHandler signal with PushBots notification Id
            window.plugins.PushbotsPlugin.done(data.pb_n_id);
        });

        window.plugins.PushbotsPlugin.on("notification:clicked", function(data){
            // var userToken = data.token; 
               // var userId = data.userId;
            console.log("clicked:" + JSON.stringify(data));
        });
        */
        
    },
    onOnline: function(){

        alert('device online');

    },
    onOffline: function(){

        alert('device offline');

    },
    receivedEvent: function(id) {

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


