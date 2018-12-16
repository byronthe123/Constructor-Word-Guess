# Constructor-Word-Guess

This is an a word guess game built with NodeJS as a command line app using Inquirer.

  

## Getting Started

  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

  

### Prerequisites

The following must be installed on your machine:

  

- Git Bash

- NodeJS

- NPM

  

### Installing Dependencies

Use NPM to install all required dependencies:

  

npm install

  

## Running the App

  

Use the following command to start the app:

  

node app.js

  

## Using the App:

### Demo:

![Alt Text](https://github.com/byronthe123/Constructor-Word-Guess/blob/master/GIF.gif)

Users interact with the app by typing in letters on their keyboard. Correct letters guessed will be revaled to the users while un-guessed letter are displayed as underscores.


## Programming Methodology

  

### Approach

The requirements were to use `constructors` to create this app, but I chose to use `classes` instead and make the app **object oriented**. The `Word` class uses the `Letter` class to display correctly guessed letters. The main **app.js** file uses the `Word` class to generate word objects to be guessed. **FS (File System)** is used to read words from a txt file. **Inquirer** is used to provide an interface to the user. **Console style** is used style the output.

## Built With

  
- NodeJS

- NPM

- Inquirer

- Console-Style


## Syntax and Conventions

The app is written in ES6 and OOP principles are used. 
