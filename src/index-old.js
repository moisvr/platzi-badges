import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges!</h1>;
const container = document.getElementById('app');
// const jsx = <h1>Hello, Platzi Badges!!!!</h1>;
// const element = React.createElement(
//    'a',
//    {href: "https://platzi.com",
//    target: "_blank",
//    XDD: ":V"},
//    'Ir a platzi :O'
// );
const name = "Jojo's";
const sum = () => 3 + 3;
const element = React.createElement('h1', {}, `Hola, soy ${name}`);
let test;
setTimeout(() => {
   test = "ma nigga";
   console.log("XDDDD");
}, 2000);
test = ":v";
// let test = "XD";

let jsx = (
   <div>
      <h1>Hola, soy Mois</h1>
      <p>Soy ingeniero fullstack {name}</p>
      <p>y la suma es: {sum()}</p>
      <p>{test}</p>
   </div>
);

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
ReactDOM.render(jsx, container);