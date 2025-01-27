# PTCG Dex

PTCG Dex is a React Native mobile app that uses the Pokemon TCG API to allow users to view every Pokemon card ever in a Pokedex sort of app. Users can search for a Pokemon and view all the cards of that Pokemon. When viewing a card, the app shows the card itself and provides a breakdown of everything on the card.

## Features

- Search functionality to allow users to search for a specific Pokemon.
- Display a list of all the cards related to the searched Pokemon.
- When a card is selected, show the card image and provide a detailed breakdown of the card's attributes.
- Create and manage binders to store and organize cards into themed collections.

## Setup and Run

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the App

#### Android

1. Start the Android emulator:
   ```
   npx react-native run-android
   ```

#### iOS

1. Start the iOS simulator:
   ```
   npx react-native run-ios
   ```

### Usage

1. Open the app on your device or emulator.
2. Use the search bar to search for a specific Pokemon.
3. View the list of cards related to the searched Pokemon.
4. Select a card to view its image and detailed breakdown.
5. Switch to the binder view to create and manage binders.
6. Add new binders and organize your cards into themed collections.

## Binder Feature

The binder feature allows users to create and manage binders to store and organize their cards into themed collections. Users can add new binders, remove existing ones, and view the binders in a list format. The binders are styled to look like trading card sleeves, providing a familiar and visually appealing way to organize cards.

### Screenshots

![Binder List](screenshots/binder_list.png)
![Add Binder](screenshots/add_binder.png)
