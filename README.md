# Quick and Dirty Local-Storage
Simple, non-intrusive, way to update Fitbit clockfaces with persistant storage for settings. 

When following the tutorials and samples of the Fitbit SDK you will probably rely on messaging for your clockface settings. Since this is very unreliable you can use the code provided here. It will save any settings on exit (but you can save whenever you want) and loads the settings when the clockface starts. So if there is no working peer socket your users will not notice that. With your old code the user will not see his/her preferences but whatever you hardcoded in the JS, SVG or CSS. The clockface shows all preferences and last read web data immediately.

The coding probably can be smarter and more compact, but this code everyone can read. Feel free to make in as cryptic as you want.

Before using this code you need to get "Shared Preferences for Fitbit SDK" (https://github.com/JohnyGQD/fitbit-shared-preferences). First put this in your clockface code.

Next follow these steps:

1. Create a table of all of your settings keys (including the keys for weather info and other web info)
2. Copy your current receive message event to the doSettings function and simplify as in the example code
3. Add the getLocalStorage function
4. Call the getLocalStorage() somewhere outside any function in your code

Thats about it. The value you store can be anything, a string, number or a JSON object with weather data or other web provided data.


