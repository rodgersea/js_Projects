
var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) {
        OSName="Windows";
    } else if (navigator.appVersion.indexOf("Mac")!=-1) {
        OSName="MacOS";
    } else if (navigator.appVersion.indexOf("X11")!=-1) {
        OSName="UNIX";
    } else if (navigator.appVersion.indexOf("Linux")!=-1) {
        OSName="Linux";
    }
    console.log(OSName);
    document.getElementById("OS").innerHTML = OSName;


var x = document.getElementById("demo");


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

function showPosition(position) {
    var late = position.coords.latitude;
  console.log(late);
    var lone = position.coords.longitude;
  console.log(lone);
  
  late = late.toFixed(2);
  lone = lone.toFixed(2);
  document.getElementById("lat").innerHTML = late;
  document.getElementById("lon").innerHTML = lone;
}