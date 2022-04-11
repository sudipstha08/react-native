import { SafeAreaView, StyleSheet, Text, StatusBar,View, Alert,Image, Button,TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

export default function App() {
  console.log("App executed")
  return (
    <SafeAreaView style={styles.container} >
      <Text numberOfLines={3}>React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:
      </Text>
      {/* <Image source={require("./assets/icon.png")}/> */}
      <TouchableWithoutFeedback onPress={() => console.log("Image")}>
      <Image fadeDuration={1000} 
      // blurRadius={10} 
      source={{ width: 200,height: 300, uri: "https://picsum.photos/200/300?grayscale" }} />

      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("Image")}>
      <Image fadeDuration={1000} 
      // blurRadius={10} 
      source={{ width: 200,height: 300, uri: "https://picsum.photos/200/300?grayscale" }} />

      </TouchableOpacity>
      <StatusBar style="auto" />
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70 , backgroundColor: "dodgerblue"}}></View>
      </TouchableNativeFeedback>
      <Button title="Click me" color="black" 
       onPress={() => Alert.alert("Button tapped", "My message", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No", onPress: () => console.log("No")}
      ])}/>
      <View style={viewStyles}>
        <Text>Hello </Text>
      </View>
    </SafeAreaView>
  );
}

const viewStyles = {
  backgroundColor: "blue"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
