import AppButton from "@/components/AppButton";
import { router } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Midterm API Activity
      </Text>
      <AppButton
        name="Go to Products Catalog"
        color="green"
        onPress={() => router.push("/products")}
      />
    </SafeAreaView>
  );
}
