import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About This App</Text>
      <Text style={styles.text}>
        This mini toolkit demonstrates React Native basics:
        {"\n"}- Navigation
        {"\n"}- Styling
        {"\n"}- Components
      </Text>

      <Button title="Back to Home" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8e7",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, textAlign: "center" },
});
