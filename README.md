---
difficulty: 2
training: true
chapter: "Chapter 2: Composables"
tags: vue
---

# A More Challenging Composable: useRefHistory

In this challenge, you are tasked with creating a `useRefHistory` composable. This composable should keep up with the history of a reactive ref, have a configurable history length, and expose an undo and a redo function.

## Requirements

The `useRefHistory` composable should:

1. take in 2 agruments:
   - `source` - the ref to keep the history for (required)
   - `capacity` - a number of how many records to keep in the history before it starts "forgetting" older values (default: Infinity) It could be a raw number, a reactive ref, a computed ref, or a callback function (getter)
2. return 3 things:
   - `history` - an array of all past values along with a timestamp of when that value was first set
   - `undo` - a function that reset's the `source` value to the last history point
   - `redo` - a function that does the opposite of `undo` (only works for values that were undone with the `undo` function. In other words, redo would only work after an undo)

> 💡 HINT: You could structure each item within the history array something like this:
> `{ value: (past source value),  timestamp:  1714595894070}`

> 💡 HINT: Feel free to use TypeScript to make your composable type safe if you'd like. This is NOT required however.

![Screenshot of the solution](https://images.certificates.dev/csvd-training-code-challenge-7.gif)
