import AppButton from "@/components/AppButton";
import Card from "@/components/Card";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SingleProduct() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!product) {
    return (
      <SafeAreaView style={{ padding: 20 }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Card>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Product ID: {product.id}
        </Text>
        <Text>Title: {product.title}</Text>
        <Text>Category: {product.category}</Text>
        <Text>Price: ${product.price}</Text>
        <Text>Description: {product.description}</Text>
      </Card>
      <AppButton
        name="Back to Products"
        color="gray"
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}
