import { StyleSheet, TextInput } from "react-native";

export default function AppInput({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
});
