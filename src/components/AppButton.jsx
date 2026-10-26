import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppButton({ name, color = "blue", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 4,
  },
  btnText: { color: "white", fontWeight: "bold" },
});
