import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, Link } from "expo-router";

export default function UploadScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("./AuthScreen")}
      >
        <Text style={styles.text}>Zur Auth Seite</Text>
      </TouchableOpacity>

      <Link href={"./InfographicViewerScreen"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Zur InfographicViewer Seite</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("./LibraryScreen")}
      >
        <Text style={styles.text}>Zur Library Seite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("./SettingsScreen")}
      >
        <Text style={styles.text}>Zur Settings Seite</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("./UploadScreen")}
      >
        <Text style={styles.text}>Zur Upload Seite</Text>
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
