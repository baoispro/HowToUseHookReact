import { Text, View, Button } from "react-native";
import {CounterApp} from "@/hooks/useState"
import { DiceRollApp} from "@/hooks/useState1";

export default function Index() {
  const {count, increase, reset} = CounterApp();
  const {diceRolls, roll} = DiceRollApp();
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text>Count: {count} </Text>
      <Button title="Increase" onPress={increase}/>
      <Button title="Reset" onPress={reset}/>
      <Text>Câu 2:</Text>
      <Button 
        title="Roll dice"
        onPress={roll}
      />
      {diceRolls.map((diceRoll, index)=>(
        <Text style={{fontSize:24}} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}
