# IMPORTANT
_**if you create or modifya file, please note here whats and why**_

maybe you should red this link, about how link a git local repository and github remote one [Adding an existing project to GitHub using the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

## INDEX
- [Notes](#Notes)
- [Components](#components)
    - [App](#App)
    - [Home](#Home)
    - [Header](#Header)
----

### Notes
this app is based on the academind videos about [reactjs-basic](https://www.youtube.com/playlist?list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS), and I will follow a new branch by video.

The playlist of videos was created on 14 dic. 2017, and now we're on 16 feb. 2019, and the  reactjs version was change,
in other things I'am using [create-react-app](https://github.com/facebook/create-react-app#create-react-app--) V2.1.1, and that explain why there are some diferencies on the react implementation,
overall on the way in how react is extended and implemented
eg:
```javascript
    // from this [ OLD ]
    import React from 'react';
    import { render } form 'react-dom';

    class App extends React.Component {
        render (){
            return (
                ...
            )
        }
    }
    // to this [ new ]
    import React, { Component } form 'react';

    class App extends Component {
        ...
    }
```

----

## Components

### **App** _[<= back to mine menu](#index)_
1. bla bla

--------------------

### ReactJS Basics - #6 Passing Data with Props

- react te pide que tengas una key unica porque asi trabaja mejor
- 12:10 crea una especie de interface para manejar el tipo de datos que acepta en cada props que resive
