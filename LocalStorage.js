// Put every settings key into this table 

var settingsKeys = [
  "colorbg",
  "colorhour"
];

// Your message received code, minor changes

messaging.peerSocket.onmessage = evt => {
  } 
  // Replace this code with your own. This is just a sample
  if (evt.data.key === "colorbg" && evt.data.newValue) {
    let color = util.stripQuotes(evt.data.newValue);
    background.style.fill = color;
    // Add this line to every key settings branche
    prefs.setItem("colorbg", color);
  }
  if (evt.data.key === "colorhour" && evt.data.newValue) {
    let color = util.stripQuotes(evt.data.newValue);
    hh1.style.fill = color;
    hh2.style.fill = color;
    // Add this line to every key settings branche
    prefs.setItem("colorhour", color);
  }    
}

// New code to add, for doSettings use a copy of your own receive message event 

function getLocalStorage() {
  var i = 0;
  var val;
  var x = settingsKeys.length;
  for (i = 0; i < x; i++) {
    val = prefs.getItem(settingsKeys[i]);
    if (val != undefined) doSettings (settingsKeys[i], val);
  }
}
function doSettings(key, value) {
  // This is a copy of the code above (your code) but simplified
  if (key === "colorbg") {
    let color = value;
    background.style.fill = color;
  }
  if (key === "colorhour") {
    let color = value;
    hh1.style.fill = color;
    hh2.style.fill = color;
  }  
}

// Finally put this line of code in your clockface (outside of any function)

getLocalStorage();
