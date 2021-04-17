# Battleship

Implementation of [Battleship boardgame](https://en.wikipedia.org/wiki/Battleship_(game)) built in React

### [Click here to play](https://bboylen.github.io/battleship/)

## Features

- User can play against an AI opponent
- Uses Responsive Design and works on both desktop and phone
- Built using Test Driven Development with [Jest](https://jestjs.io/)
- Allows user to place ships horizontally or vertically
- Grid changes color to allow player to know if ship placement is valid

## Display Images

![battleship 5](https://user-images.githubusercontent.com/52515015/115127467-508c0400-9f9c-11eb-9782-06e7e0433120.png) ![battleship 6](https://user-images.githubusercontent.com/52515015/115127469-5255c780-9f9c-11eb-9543-529d82d6494b.png)


## Learning Takeaways

Building this app showed me that building the user interface for a game is much harder than implementing the game logic itself. It was pretty simple to write the tests and functions for the basic game behavior. However, planning out the structure of the React component hierarchy for the display was much trickier. 

I ended up storing the vast majority of the stateful information in a top level "Game Logic" component. With this architecture I was able to pass down only what was needed to the display components based on the state of the game. If I were to refactor this code, I would be even more precise with the information that I am sending to lower level components; in a couple cases these components are quite messy, containing multiple if statements to determine the correct classes or onclick functions.

This project also served to deepen my understanding of React Component Lifecycles as well as how Hooks work. A lot of stateful information is stored and updated on every turn, so it is essential that everything gets called in the right order. I have a deepened appreciation for the UseEffect hook after seeing how flexible it is in calling the effects I need at the right time, with the right data. 

## To-Do

- Make Computer AI smarter
- Add multiple difficulty modes
- Let 2 people play against eachother on one device
- Let people play together online
- Make the design look better
