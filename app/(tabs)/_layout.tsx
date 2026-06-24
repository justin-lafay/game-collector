import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs>
        <Tabs.Screen name="home" options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
            }} />
        <Tabs.Screen name="browse" options={{
            title: 'Browse',
            tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />
            }} />
        <Tabs.Screen name="finder" options={{
            title: 'Finder',
            tabBarIcon: ({ color, size }) => <Ionicons name="filter" color={color} size={size} />
        }} />
        <Tabs.Screen name="about" options={{
            title: 'About',
            tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} />
        }} />
    </Tabs>
}   