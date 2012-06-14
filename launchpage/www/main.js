
    //
    $('#notif').click(function(){
  function alertDismissed() {
      console.log("Alert Dismissed");
  }
  
  navigator.notification.alert(
            'This is an alert!', // message
            alertDismissed(), // callback
            'Over', // title
            'Done' // buttonName
        );
});


    // geolocation button click
    $('#geo').click(function () {
        // test for presence of geolocation
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(geo_success, geo_error);
        } else {
            error('Geolocation is not supported.');
        }
    });
 
function geo_success(position) {
    printLatLong(position.coords.latitude, position.coords.longitude);
}
 
// The PositionError object returned contains the following attributes:
// code: a numeric response code
// PERMISSION_DENIED = 1
// POSITION_UNAVAILABLE = 2
// TIMEOUT = 3
// message: Primarily for debugging. It's recommended not to show this error
// to users.
function geo_error(err) {
    if (err.code == 1) {
        error('The user denied the request for location information.');
    } else if (err.code == 2) {
        error('Your location information is unavailable.');
    } else if (err.code == 3) {
        error('The request to get your location timed out.');
    } else {
        error('An unknown error occurred while requesting your location.');
    }
}
 
// output lat and long
function printLatLong(lat, long) {
    alert('You are at Latitude: ' + lat + ' and Longitude: ' + long);
}
 
function error(msg) {
    alert(msg);
}

    // Compass
    $('#compass').click(function () {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    });

    // onSuccess: Get the current heading
    
    function onSuccess(heading) {
        alert('You are currently heading: ' + heading);
   }

    // onError: Failed to get the heading
    //
    function onError() {
        alert('onError!');
    }


//Connection

$('#connect').click(function() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    });

//camera

$('#camera').click(function(){
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
});

function uploadPhoto(data){
// this is where you would send the image file to server
 
    cameraPic.src = "data:image/jpeg;base64," + data;
    // Successful upload to the server
    navigator.notification.alert(
        'Your Photo has been uploaded',  // message
        okay,                           // callback
        'Photo Uploaded',              // title
        'OK'                          // buttonName
    );
 
    // upload has failed 
 
  
    if (failedToUpload){
 
    navigator.notification.alert(
        'Your Photo has failed to upload',
        failedDismissed,
        'Photo Not Uploaded',
        'OK'
        );
 
    }
   
 
}
 
function okay(){
    // Do something
}
