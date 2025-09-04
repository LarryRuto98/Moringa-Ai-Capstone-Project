🚀 Prompt-Powered Kickstart: Beginner’s Toolkit for React Native with Expo
1. Title & Objective

Technology Chosen: React Native (with Expo & Expo Router)

Why Chosen:
React Native is one of the most popular frameworks for building cross-platform mobile apps (Android & iOS) using JavaScript/TypeScript. It’s beginner-friendly, has great community support, and integrates well with AI-assisted learning.

End Goal:
Create a simple mobile app that:

Shows styled text and buttons

Demonstrates state management (counter example)

Demonstrates navigation (Home → About screen)

2. Quick Summary of the Technology

What is it?
React Native is a framework for building native mobile applications using JavaScript and React. It allows developers to write once and deploy on both Android and iOS.

Where is it used?

Mobile applications

Cross-platform development

Prototyping apps quickly with a single codebase

One Real-World Example

Facebook, Instagram, and Tesla apps all use React Native in production.

3. System Requirements

OS: Linux, MacOS, or Windows

Tools/Editors:

Node.js
 (v18 or newer)

npm
 (v9 or newer)

VS Code
 (recommended editor)

Expo Go
 app on your Android/iOS device

Packages Installed:

expo

react-native

expo-router

4. Installation & Setup Instructions

Create the project

npx create-expo-app@latest rn-beginner-kit


Move into the project directory

cd rn-beginner-kit


Start the project

npm run start


Open Expo Go on your device and scan the QR code to preview the app.

5. Minimal Working Example

Our project has two screens: Home and About.

app/index.tsx (Home Screen)

import { View, Text, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 React Native Beginner’s Toolkit</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Go to About" onPress={() => router.push("/about")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4f8" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  counter: { fontSize: 18, marginBottom: 10, color: "#007aff" },
});


app/about.tsx (About Screen)

import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About This App</Text>
      <Text style={styles.text}>
        This toolkit demonstrates React Native basics:
        {"\n"}- Navigation
        {"\n"}- Styling
        {"\n"}- State Management
      </Text>
      <Button title="Back to Home" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff8e7" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, textAlign: "center" },
});


Expected Output

Home Screen shows a title, a counter with an “Increase” button, and a button to navigate to About.

About Screen explains the toolkit and has a button to return to Home.

6. AI Prompt Journal

Prompt used:
“How do I create a React Native project with Expo and add navigation?”

AI Response Summary:

Helped scaffold the Expo project with create-expo-app

Guided me to use app/ folder structure and Expo Router

Showed how to use useRouter() instead of navigation props

Evaluation:
Invaluable — saved time by resolving TypeScript navigation issues and simplifying the setup.

7. Common Issues & Fixes

Issue: Ran npx create-expo-appp@latest (typo with 3 “p”s) → got npm error 404.
Fix: Correct command is npx create-expo-app@latest.

Issue: Black background with only text/buttons showing.
Fix: Added flex:1 and backgroundColor to container styles.

Issue: TypeScript error: Binding element 'navigation' implicitly has an 'any' type.
Fix: Switched to useRouter from Expo Router.

8. References

React Native Docs

Expo Docs

Expo Router Docs

React Native Styling Cheatsheet

🧠 AI Reflection
Using AI prompts helped me quickly scaffold the project, debug common setup errors, and learn best practices for Expo Router. It reduced the time I’d normally spend searching through docs and StackOverflow.
