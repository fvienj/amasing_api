import AppButton from "@/components/AppButton";
import AppInput from "@/components/AppInput";
import Card from "@/components/Card";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UpdateProduct() {
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setTitle(json.title);
        setPrice(String(json.price));
      })
      .catch((err) => console.error(err));
  }, []);

  function saveChanges() {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        price: Number(price),
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Alert.alert("Updated", `Product #${id} updated successfully`);
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
        <AppButton name="Save Changes" color="blue" onPress={saveChanges} />
        <AppButton name="Cancel" color="gray" onPress={() => router.back()} />
      </Card>
    </SafeAreaView>
  );
}
