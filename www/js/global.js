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

        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    onDeviceReady: function() {

        app.receivedEvent('deviceready');

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



/*
|--------------------------------------------------------------------------
| GLOBAL VARS
|--------------------------------------------------------------------------
*/

var ajaxUrl = 'https://dev.crystalmountainmedia.net/clients/dme/wp-content/themes/dme-promotions/app.php';
//var ajaxUrl = 'https://dme-promotions.com/wp-content/themes/dme-promotions/app.php';
//var paymentUrl = 'https://www.hotcountrytv.com/wp/wp-content/themes/hot-country-tv/app-payment.php';
//var adminAjaxUrl = 'https://www.hotcountrytv.com/wp/wp-admin/admin-ajax.php';


/*
|--------------------------------------------------------------------------
| GLOBAL FUNCTIONS
|--------------------------------------------------------------------------
*/

function getPageContent(){

    $.ajax({
          type: "GET",
          url: ajaxUrl,
          data: {type: 'banner-adverts'},
          success: function (result) {
              $('section.banner-adverts .swiper-wrapper').html( result );
              initiateSwiper();
          }
    });


    /*if( $('body').hasClass('page-home')){

       $('.spinner').fadeIn(200);
       $.ajax({
              type: "GET",
              url: ajaxUrl,
              data: {type: 'page-home', version: $('body').data('version') },
              success: function (result) {
                  $('.spinner').fadeOut(200);
                  $('section.main').append( result );
                  setVideoHeight();
              }
        });
    }*/
}

/*
|--------------------------------------------------------------------------
| DOCUMENT READY
|--------------------------------------------------------------------------
*/


$( document ).ready( function(){


    /*
    |--------------------------------------------------------------------------
    | BACK BUTTON LINKS
    |--------------------------------------------------------------------------
    */

    // local storage to keep previous page?
    /*$('.back-button').on('click', function( e ){
        e.preventDefault();
        window.history.back();
    });*/

    /*
    |--------------------------------------------------------------------------
    | LOAD ADVERTS
    |--------------------------------------------------------------------------
    */

    //getPageContent();    


});


//$( window ).load( function(){ setVideoHeight(); });
//$( window ).resize(function(){ setVideoHeight(); });

