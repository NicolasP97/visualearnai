import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function UploadScreen() {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Zur Auth Seite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 90,
    height: 50,
    backgroundColor: "rgba(14, 175, 249, 1)",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
