# React Native useEffect Cleanup Issue with Async Operations

This repository demonstrates a common issue in React Native where the cleanup function in `useEffect` might not be called properly when dealing with asynchronous operations.  This can cause memory leaks and unexpected behavior.

## Problem

The provided `bug.js` file contains a `useEffect` hook that fetches data asynchronously. If the component unmounts before the fetch completes, the cleanup function won't execute. 

## Solution

The `bugSolution.js` file offers a solution using the `AbortController` API. This allows us to cleanly cancel the request if the component unmounts before completion, thus preventing memory leaks.

## Setup

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run your preferred React Native bundler. 
