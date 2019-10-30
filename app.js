// Esto funciona, pero es una mala práctica, necesitamos crear elementos
document.getElementById('app1').innerHTML = "<h1 id='title'>Hola Mundo Mala práctica</h1>";

// Vanila JS, forma correcta de crear un elementos
const el = document.createElement('h1');
el.setAttribute('id','title');
el.textContent = 'Hola Mundo con Vanilla Js';
document.getElementById('app2').appendChild(el); //appendChild sólo recibe un elemento
//Pero el problea es que si necesito más elementos se complica con Vanilla Js, tocaría crear más eleentos y queda más extenso.

// Con React.js

const elr = React.createElement(
    'h1', 
    {id:title},
    'Hola ',
    React.createElement('span', null, 'mundo con React')
); //Acá creatElement es un método de react, este los guarda y no son del dom, sino del virtual dom. Es una representación virtual del dom y luego react hace que coincida.
ReactDOM.render(elr,document.getElementById('app3'));
// de esta forma sigue siendo un poco complejo.

// React JSX, es como si escribiera html, no es html es jsx

//se necesita compilar
const eljsx = '<h1 id="title">Hola <span>Mundo con JSX</span></h1>';
//Esto el navegador no lo entiende, entonces se necesita compilar, utiliza prepors
ReactDOM.render(eljsx,document.getElementById('app4'));

//Los componentes son funciones que reciben datos y retornan elements de React.
// //ES5
// function Saludar(props) {
//     return <h1>Hola {props.name}</h1>
// }
// //ES6
// const Saludar = props => {
//     return <h1>Hola {props.name}</h1>
// }
// ReactDOM.render(
//     <div>
//     <Saludar name="Alexander" />
//     </div>, 
//     document.getElementById('app5')
// );
