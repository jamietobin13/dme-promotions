/*
|--------------------------------------------------------------------------
| APP START
|--------------------------------------------------------------------------
*/
var app = {
    initialize: function() {

        app.bindEvents();
        console.log('inited')

    },   
    bindEvents: function() {

        console.log('binded')
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    onDeviceReady: function() {

        app.receivedEvent('deviceready');
        alert('device ready 1');

    },
    onOffline: function(){

        app.receivedEvent('offline');
        alert('device offline 1');

    },
    onOnline: function(){

        app.receivedEvent('online');
        alert('device online 1');

    },
    receivedEvent: function(id) {

      alert( 'id: ' + id );
       /* 
        if( id == 'offline' ){ alert('device offline'); } 
        if( id == 'online' ){ alert('device online'); }*/

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
    }

};




