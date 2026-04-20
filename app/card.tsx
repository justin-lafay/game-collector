import { Button, Text, View } from "react-native";

export default function Card({ game, deleteGame }: { game: { name: string; genre: string; numPlayers: number; avgTime: number; maxTime: number }, deleteGame: () => void }) {
    
    return (
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, marginBottom: 20, borderBlockColor: "gray", borderWidth: 1 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>{game.name}</Text>
            <Text style={{ marginTop: 10 }}>Genre: {game.genre}</Text>
            <Text>Number of players: {game.numPlayers}</Text>
            <Text>Average time: {game.avgTime} minutes</Text>
            <Text>Maximum time: {game.maxTime} minutes</Text>
            <Button title="Delete" onPress={deleteGame} />
        </View>
    );
}