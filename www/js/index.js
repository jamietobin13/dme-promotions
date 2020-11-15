/*
|--------------------------------------------------------------------------
| APP START
|--------------------------------------------------------------------------
*/

var app = {

    initialize: function() {

        this.bindEvents();

    },
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);

    },
    onDeviceReady: function() {

        app.receivedEvent('deviceready');

    },
    onOnline: function(){

        app.receivedEvent('online');

    },
    onOffline: function(){

        app.receivedEvent('offline');

    },
    receivedEvent: function(id) {

        if( id == 'offline' ){ alert('no connection'); }
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        //console.log('Received Event: ' + id);
    }
};


