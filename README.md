# Risk Profile App

This is a React Native application that helps users determine their risk profile through a series of questions. The app saves the user's name and questionnaire responses using Redux and navigates through different screens using React Navigation.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screens](#screens)
- [Technologies](#technologies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- React Native CLI

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:shruti705/assesment.git
   cd risk-profile-app

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install

 3. Run the application:

   ```bash
   npm run android
   # or
   npm run ios  

## Features
Login screen to capture the user's name.
Questionnaire screen to determine the user's risk profile.
Result screen displaying the user's risk category and a relevant image.
State management with Redux.
Navigation between screens using React Navigation. 

## Screens
1. Login Screen
Captures the user's name and navigates to the home screen.
2. Home Screen
A welcome screen that provides an introduction to the app.
3. Questionnaire Screen
Displays a series of questions with multiple-choice answers.
Updates the total score based on the user's responses.
4. Result Screen
Displays the user's risk profile score and category.
Shows an image based on the risk category (Low, Medium, High).

## Technologies
React Native
Redux Toolkit
React Navigation
TypeScript
