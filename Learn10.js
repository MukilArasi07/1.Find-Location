if (navigator.geolocation) {
    console.log("Support");
    navigator.geolocation.getCurrentPosition(success, error, {
      maximumAge: 10 * 60 * 1000,
      timeout: 0,
    });
  } else {
    console.log("Not Support");
  }
  
  function success(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    console.log(`https://www.google.com/maps/@${lat},${lng}`);
  }
  function error(error) {
    alert("We could not find your location");
    console.log(error.code);
  }
  
  const watcher = navigator.geolocation.watchPosition(success);
  
  setTimeout(() => {
    navigator.geolocation.clearWatch(watcher);
  }, 15000);
  