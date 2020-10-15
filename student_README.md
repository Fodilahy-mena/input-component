<!-- Please update value in the {}  -->

<h1 align="center">{Your project name}</h1>

<div align="center">
  <h3>
    <a href="https://{your-demo-link.your-domain}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{your-url-to-the-solution}">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

### Screenshot demo
![screenshot](./screenshot.png)


This is my [Input component](https://5f87f064f8a7179adf6cc514--dreamy-bell-d25bc4.netlify.app/) which is made with react. The screenshot above is the demo of the accomplished challenge. 

Most of the user story were ok but setting icons in the inputs were a bit challenging. However, it's done with css backgroung.

```css
/* We have to use those properties to both selectors for the safe side of browsers support */
  .input--startIcon::-ms-input-placeholder {
    background: url('./assets/call.svg') no-repeat;
    background-position: 16px;
    opacity: .6;
} 
/*  also for this selector, it is whether 
shown or hidden*/
.input--startIcon:placeholder-shown {
    background: url('./assets/call.svg') no-repeat; 
    background-position: 16px;
    opacity: .6;
    
  }

```

I also had a difficulty with the colour of label to be the same colour as the border when focusing and hovering the input. It works with hover but the focuse didn't unless I used 
```css 
.label:focus-within {
  /* css properties here-- */
}
 ```

Those things are considerably new for me. I'm not sure if it makes sense with css style but I know it does the trick - `(hack)`. I learned many things through this challenge.


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

## How To Use

<!-- Example:  -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

-   [Node.js](https://nodejs.org/)
-   [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

-   Website [your-website.com](https://{your-web-site-link})
-   GitHub [@Fodilahy-mena](https://github.com/Fodilahy-mena)
-   Twitter [@your-twitter](https://{twitter.com/your-username})
