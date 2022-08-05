---
title: 'Enums vs. strings in Typescript'
date: '2022-08-05'
desc: 'Enums provide readability and maintainability and are as such tempting to sometimes utilise in a possibly disproportionate fashion. A few pros and cons.'
---

Typescript adds enums to Javascript. "Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript." the official [TS handbook](https://www.typescriptlang.org/docs/handbook/enums.html) states.

```jsx
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

Enums provide readability and maintainability. Correctly named a string enum will immediately convey its meaning as the concept of the collection of values it resembles, nicely encapsulated.

Working with string enum types can sometimes be irritating however. They require intellisense or lookups to properly identify their corresponding string values and even then - the name of their identifier will probably give the actual value away 90 % of the time anyway.

The most annoying error might be this particular one:

```jsx
// Arbitrary function moving something in a direction
moveInDirection('UP');

// Type '"UP"' is not assignable to type 'Direction'
```

Just looking at this call you may have expected this kind of function signature:

```jsx
const moveInDirection = (direction: string): void => console.log(`Moving ${direction}.`);
```

It's this one instead though, the argument being typed as `Direction` type, not string:

```jsx
const moveInDirection = (direction: Direction): void => console.log(`Moving ${direction}.`);
```

To have my code compile correctly, I need to write it as follows:

```jsx
import { Direction } from './directionTypes';

moveInDirection(Direction.Up);
```

Working with this enum, you will always require the import and the dependency it creates. If the identifier's name is equal to its value the readability of the function call will hardly suffer but the code will become unnecessarily verbose. Verbose is a strong word for one added line but it that'll accumulate within a medium-sized app. You will also have to ensure the enum is being exported correctly.

Additionally it might be worthwhile to take the compiled Javascript into consideration. The above-mentioned `Direction` enum compiles to ([TS Playground](https://www.typescriptlang.org/play)):

```js
var Direction;
(function (Direction) {
	Direction['Up'] = 'UP';
	Direction['Down'] = 'DOWN';
	Direction['Left'] = 'LEFT';
	Direction['Right'] = 'RIGHT';
})(Direction || (Direction = {}));
```

Not that much either but again, it adds up.

The counterproposal to using a string enum is to use a union of string types.

```jsx
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

moveInDirection('UP'); // This is ok now.
moveInDirection('NORTH'); // Type '"NORTH"' is not assignable to type 'Direction'
```

This works because Typescript utilises structural typing - except for string enums which are nominally typed. The source of the value is therefore taken into consideration even though the enum value and a corresponding string coerce to the same value.

```jsx
console.log(Direction.Up); // "UP"
console.log(Direction.Up === 'UP'); // true
```

### TLDR

Clearly the pros for using string enums are type safety and auto completion. The cons are exports, dependencies and throwing the curveball of nominal typing in an otherwise structurally typed language. It does however depend on the size of my string enums or string union types and how many string enums my codebase has. It's worth considering both options for different development experiences.
