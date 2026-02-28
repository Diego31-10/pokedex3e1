# Pokedex3e1 🎮

![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=flat&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-~54.0.20-000020?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-MVP-yellow)

## 📖 Overview

A cross-platform Pokédex application built with React Native and Expo that enables users to explore the world of Pokémon through an intuitive mobile and web interface. The app integrates with PokéAPI for comprehensive Pokémon data and leverages Google's Gemini AI to provide intelligent, conversational insights about any Pokémon.

**Problem It Solves:** Provides a unified, mobile-first platform for Pokémon enthusiasts to quickly search, explore, and learn about Pokémon with AI-powered assistance, eliminating the need to browse multiple websites or resources.

## 🛠️ Tech Stack

**Frontend & Mobile:**
- React Native 0.81.5 & React 19.1.0
- Expo ~54.0.20 (cross-platform framework)
- TypeScript 5.9.2
- Expo Router (file-based routing)

**Styling:**
- TailwindCSS 3.4.18
- NativeWind 4.2.1 (Tailwind for React Native)

**API & Data:**
- Axios 1.13.1 (HTTP client)
- PokéAPI (REST API for Pokémon data)
- Google Generative AI 0.24.1 (Gemini integration)

**State & Storage:**
- React Context API
- AsyncStorage 2.2.0 (persistent local storage)

## ✨ Features

- **Smart Search:** Search Pokémon by ID or name with instant results
- **Detailed Information:** View comprehensive stats, types, height, weight, and official artwork
- **Evolution Chains:** Explore complete evolution paths with recursive tree visualization
- **Favorites System:** Save favorite Pokémon with persistent local storage across sessions
- **AI Chat Integration:** Ask Gemini AI questions about specific Pokémon characteristics and lore
- **Sequential Navigation:** Browse through Pokémon using previous/next controls
- **Type Badges:** Color-coded visual indicators for all Pokémon types
- **Stats Visualization:** Interactive stat bars for HP, Attack, Defense, Speed, and more
- **Cross-Platform:** Runs seamlessly on iOS, Android, and Web from a single codebase

## 🏗️ Technical Decisions

- **Expo Router over React Navigation:** Adopted file-based routing for simplified navigation and automatic deep linking, reducing boilerplate and improving developer experience.

- **NativeWind for Styling:** Chose utility-first CSS approach with NativeWind to enable Tailwind CSS syntax in React Native, ensuring consistent styling across web and mobile platforms while maintaining performance.

- **Context API over Redux:** Implemented lightweight Context API for favorites management instead of Redux, reducing complexity and bundle size for a small-scale state management need.

- **AsyncStorage for Persistence:** Selected AsyncStorage over more complex solutions like SQLite or Realm for simple key-value storage, perfectly suited for persisting user favorites without unnecessary overhead.

- **Gemini AI Integration:** Integrated Google's Gemini AI to provide intelligent, conversational Pokémon information, enhancing user engagement beyond static API data.

## 💻 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, included in project)

### Setup

```bash
# Clone the repository
git clone https://github.com/Diego31-10/pokedex3e1.git

# Navigate to project directory
cd pokedex3e1

# Install dependencies
npm install

# Start the development server
npm start
```

### Platform-Specific Commands

```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web

# Run linter
npm run lint
```

## 🚀 Usage

1. **Search Pokémon:** Enter a Pokémon name or ID in the search bar
2. **View Details:** Explore stats, types, and evolution chains
3. **Add to Favorites:** Tap the heart icon to save Pokémon to your favorites
4. **Navigate:** Use previous/next buttons to browse sequentially
5. **Ask AI:** Click the chat icon to ask Gemini AI questions about the Pokémon
6. **Access Favorites:** Switch to the favorites tab to view your saved collection

## 📚 Learning Outcomes

- **Cross-Platform Development:** Mastered building universal apps that run on iOS, Android, and Web from a single TypeScript codebase using Expo.

- **TypeScript Architecture:** Implemented type-safe component architecture with custom types and interfaces, reducing runtime errors and improving code maintainability.

- **API Integration Patterns:** Developed robust API service layer with Axios for REST API consumption, including error handling and recursive data parsing for complex structures like evolution chains.

- **AI Integration:** Gained hands-on experience integrating generative AI (Gemini API) into mobile applications for enhanced user interactions.

- **State Management:** Applied React Context API effectively for global state management with persistent storage using AsyncStorage.

- **Modern Styling Approaches:** Leveraged utility-first CSS with TailwindCSS and NativeWind to create responsive, maintainable UI components across platforms.

## 👤 Author

**Diego31-10**

GitHub: [@Diego31-10](https://github.com/Diego31-10)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2026 Diego31-10
