## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screens](#screens)
- [Components](#components)
- [Running the App](#running-the-app)
- [Technologies](#technologies)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/chris-designx/nft-marketplace
    ```

2. Navigate to the project directory:
    ```bash
    cd gigs-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the Expo development server:
    ```bash
    npx expo start
    ```

5. Run the app on your emulator or connected device.

## Features

- **NFT Listing**: View a list of NFTs with images, titles, and prices.
- **Search Functionality**: Search for NFTs by name.
- **NFT Details**: Click on any NFT to view more detailed information.
- **Bid Placement**: Place bids on NFTs.
- **Responsive Design**: Works on both Android and iOS devices.
- **Dark and Light Modes**: Switch between dark and light themes.

## Screens

1. **Home Screen**:
    - Displays a list of NFTs.
    - Search functionality.
    - Navigation to NFT details.
  
2. **Details Screen**:
    - Displays the details of a selected NFT.
    - Shows current bids.
    - Allows placing a bid.

## Components

- **NFTCard**: Displays individual NFTs in a card format.
- **DetailsDesc**: Displays detailed descriptions of NFTs.
- **DetailsBid**: Shows bids placed on a specific NFT.
- **HomeHeader**: Provides a header with a search bar on the home screen.
- **Buttons**: Custom buttons like CircleButton and RectButton for actions like navigating and placing bids.

## Running the App

### Development

To run the app in development mode, use Expo's development server:

```bash
npx expo start
