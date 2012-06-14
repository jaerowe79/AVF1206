	
	// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
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
        error('The user denied the request for location information.')
    } else if (err.code == 2) {
        error('Your location information is unavailable.')
    } else if (err.code == 3) {
        error('The request to get your location timed out.')
    } else {
        error('An unknown error occurred while requesting your location.')
    }
}
 
// output lat and long
function printLatLong(lat, long) {
    alert('You are at Latitude: ' + lat + ' and Longitude: ' + long);
}
 
function error(msg) {
    alert(msg);
}

    // PhoneGap is ready
    //
    function onDeviceReady() {
        navigator.compass.getCurrentHeading(onSuccess, onError);
    }

    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        alert('You are currently heading: ' + heading);
    }

    // onError: Failed to get the heading
    //
    function onError() {
        alert('onError!');
    }


