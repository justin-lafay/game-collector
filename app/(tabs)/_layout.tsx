import { Symbol } from "expo-symbols";
import { Tabs } from "expo-router";

export default function RootLayout() {
    return <Tabs>
        <Tabs.Screen name="home" options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Symbol name="house.fill" color={color} size={size} />
            }} />
        <Tabs.Screen name="browse" options={{
            title: 'Browse',
            tabBarIcon: ({ color, size }) => <Symbol name="magnifyingglass" color={color} size={size} />
            }} />
        <Tabs.Screen name="finder" options={{
            title: 'Finder',
            tabBarIcon: ({ color, size }) => <Symbol name="slider.horizontal.3" color={color} size={size} />
        }} />
        <Tabs.Screen name="about" options={{
            title: 'About',
            tabBarIcon: ({ color, size }) => <Symbol name="info.circle.fill" color={color} size={size} />
        }} />
    </Tabs>
}   