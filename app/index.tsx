import { Text, View, Button } from "react-native";
import {CounterApp} from "@/hooks/useState"

export default function Index() {
  const {count, increase, reset} = CounterApp();
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text>Count: {count} </Text>
      <Button title="Increase" onPress={increase}/>
      <Button title="Reset" onPress={reset}/>
    </View>
  );
}
