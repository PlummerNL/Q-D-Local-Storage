# Q-D-Local-Storage
Simple, non-intrusive, way to update Fitbit clockfaces with persistant storage for settings

When following the tutorials and samples of the Fitbit SDK you will probably rely on messaging for your clockface settings. Since this is very unreliable you can use the code provided here.

Before using this code you need to get "Shared Preferences for Fitbit SDK" (https://github.com/JohnyGQD/fitbit-shared-preferences). First put this in your clockface code.

Next follow these steps:

1. Create a table of all of your settings keys (including the keys for weather info and other web info)
2. Copy your current receive message event to the doSettings function
3. 
