// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
//   }

//   document.body.appendChild(component());

import _ from 'lodash';
import printMe from './print.js';

const Other = () => {
    const elementh3 = document.createElement("h3");
    elementh3.id = "value"
    elementh3.innerHTML = 0;
    return elementh3;
}
const Increament = () => {
    const add = document.createElement("button");
    add.id = "increament"
    add.innerHTML = "+";
    add.addEventListener('click', () => {
        value.innerHTML++;
    })
    return add;
}
const Decreament = () => {
    const sub = document.createElement("button");
    sub.id = "decreament"
    sub.innerHTML = "-";
    sub.addEventListener('click', () => {
        if (value.innerHTML > 0) {
            value.innerHTML--;
        }
    })
    return sub;
}
const Reset = () => {
    const reset = document.createElement("button");
    reset.id = "reset"
    reset.innerHTML = "Reset";
    reset.addEventListener('click', () => {
        value.innerHTML = "0";
    })
   
    return reset;
}





function component() {
    const rootElement = document.createElement("div")
    rootElement.appendChild(Other());
    rootElement.appendChild(Increament());
    rootElement.appendChild(Reset());
    rootElement.appendChild(Decreament());

    // return rootElement;
    return rootElement;
}

document.body.appendChild(component());