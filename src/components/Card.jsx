import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
});
