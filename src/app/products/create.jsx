import AppButton from "@/components/AppButton";
import AppInput from "@/components/AppInput";
import Card from "@/components/Card";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  function createProduct() {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        price: Number(price),
        category: category,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Alert.alert("Success", `Product created with ID: ${json.id}`);
        router.back();
      })
      .catch((err) => console.error(err));
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Card>
        <AppInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <AppInput
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        <AppInput
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <AppButton
          name="Create Product"
          color="green"
          onPress={createProduct}
        />
        <AppButton name="Cancel" color="gray" onPress={() => router.back()} />
      </Card>
    </SafeAreaView>
  );
}
