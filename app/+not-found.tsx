import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
        <Link href="/home">
          Go back to Home screen!
        </Link>
    </>
  );
}
