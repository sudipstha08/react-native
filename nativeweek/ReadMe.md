## Firebase
- https://rnfirebase.io/


## Change App name
```
91


You can change the name attribute in package.json, run react-native upgrade, and just let react overwrite the android/ios files. Don't overwrite your index files if there is unsaved code, however.

Then change your Appregistry line from

AppRegistry.registerComponent('MyAppIOS', () => MyAppIOS);
To:

AppRegistry.registerComponent('MyApp', () => MyApp);

```