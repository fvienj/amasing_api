import AppButton from "@/components/AppButton";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductsList() {
  const [products, setProducts] = useState(null);

  // 1. GET ALL PRODUCTS
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products); // DummyJSON puts the array inside .products
      })
      .catch((err) => console.error(err));
  }, []);

  // 2. DELETE PRODUCT & UI SYNC
  function deleteProduct(productId) {
    fetch(`https://dummyjson.com/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Filter out item so it immediately disappears from screen
        setProducts((prev) => prev.filter((item) => item.id !== productId));
      })
      .catch((err) => console.error(err));
  }

  if (!products) {
    return (
      <SafeAreaView style={{ padding: 20 }}>
        <Text>Loading products...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <AppButton
        name="Create Product"
        color="green"
        onPress={() => router.push("/products/create")}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 12,
              borderBottomWidth: 1,
              borderColor: "#eee",
              paddingBottom: 8,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {item.id}. {item.title}
            </Text>
            <Text>Price: ${item.price}</Text>

            <AppButton
              name="View Product"
              color="red"
              onPress={() => router.push(`/products/${item.id}`)}
            />
            <AppButton
              name="Update Product"
              color="blue"
              onPress={() => router.push(`/products/${item.id}/update`)}
            />
            <AppButton
              name="Delete Product"
              color="purple"
              onPress={() => deleteProduct(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
