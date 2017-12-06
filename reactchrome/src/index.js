import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Get the element to prepend our app to from https://www.google.com.
// This could be a specific element on a website or something more general like `document.body`.
const viewport = document.querySelector('.js-toolbar');

// Create a div to render the App component to.
const app = document.createElement('div');

// Set the app element's id to `root`.
// This name is the same as the element that create-react-app renders to by default
// so it will work on the development server too.
app.id = 'root';
app.className = 'toolbar-group';

// Prepend the App to the viewport element in production if it exists on the page.
// You could also use `appendChild` depending on your needs.
if (viewport) viewport.prepend(app);

// Render the App.
ReactDOM.render(<App />, document.getElementById('root'));
