# Four in a Row

## Requirements and Guidelines for Board Class Constructor Method

    The constructor method should define the following properties: rows, columns, and spaces.
    Set the value of the rows property to 6.
    Set the value of the columns property to 7.
    Set the value of the spaces property to an empty array.

## Requirements and Guidelines for Space Class Constructor Method

    The constructor method should define the following properties: x, y, id, and token.
    Set the value of the x and y properties to the x and y values passed in as arguments to the constructor method.
    Set the id property to template literal space-${x}-${y}.
    Set the token property to null.

## Requirements and Guidelines for the createSpaces() Method

    It should receive no arguments.
    It should return a two-dimensional array of newly created Space objects.
    A nested for-loop can be used to iterate through the rows and columns to generate a new Space object for every location on the board. Be sure to pass the appropriate arguments to the Token constructor method.

## Requirements and guidelines for the Game class constructor method

    The constructor method should define the following properties: board, players, and ready.
    The board property will be set to a new Board object.
    The players property will hold an array of Player objects. This will be done using the same pattern we used to create Token objects inside the Player class, and create Spaces inside the Board class.
    The ready property will be set to false.

### Requirements and guidelines for the createPlayers() method

    It should receive no arguments.
    It should return an array of two newly created Player objects

## Player Object Property Values

### Player 1

    The name parameter should receive a string value of Player 1 (or name of your choice)
    The color parameter should receive a string value of #e15258
    The id parameter should receive an integer value of 1
    The active parameter should receive a boolean value of true

### Player 2

    The name parameter should receive a string value of Player 2 (or name of your choice)
    The color parameter should receive a string value of #e59a13
    The id parameter should receive an integer value of 2
    Because the active parameter in the Player constructor method has a default value of false, no argument for the value of active needs to be passed.

## Requirements and Guidelines for the Event Listener

    The event listener should listen for a click event on the #begin-game button.
    The event listener should have a callback function that calls the startGame() method on the newly created Game object.
    Inside the callback function, include the following code in order to hide the start button and show the game board:

## Rendering Spaces

### Requirements for the drawSVGSpace() Method

    This method should receive no arguments.
    This method should not return anything.

### Assignment

    Add two properties in the Space class constructor method: diameter and radius. Set the value of the diameter property equal to 76. The radius property should be equal to half the value of the diameter property.
    Create a method inside the Space class called drawSVGSpace() using the requirements and guidelines below.
