import { Button, Text, View } from "react-native";

export default function Card({ game, deleteGame }: { game: { id: number; name: string; minPlayers: string; maxPlayers: string; avgTime: number; maxTime: number; timeFeeling: string; type: string }, deleteGame: () => void }) {
    
    return (
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, marginBottom: 20, borderBlockColor: "gray", borderWidth: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>{game.name}</Text>
            <Text style={{ marginTop: 10 }}>Minimum players: {game.minPlayers}</Text>
            <Text>Maximum players: {game.maxPlayers}</Text>
            <Text>Average time: {game.avgTime} minutes</Text>
            <Text>Maximum time: {game.maxTime} minutes</Text>
            <Text>Time feeling: {game.timeFeeling}</Text>
            <Text>Type: {game.type}</Text>
            <Button title="Delete" onPress={deleteGame} />
        </View>
    );
}