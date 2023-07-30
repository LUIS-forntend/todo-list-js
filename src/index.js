import "./style.css";
import {todo, todoList} from "./classes/index.js";
import {insertarTarea} from "./js/components";



// const nuevoTarea = new todo ("work administrator");

// const nuevoTarea2 = new todo ("work programer");

export const guardarTarea = new todoList ();
 
// const see = guardarTarea.añadirTarea(nuevoTarea);

// const see2 = guardarTarea.añadirTarea(nuevoTarea2);

 

// guardarTarea.guardarLocalStorage("almorzar luis");



// nuevoTarea2.complete = true;

// console.log(see2);





// insertarTarea(nuevoTarea2);


// insertarTarea(nuevoTarea);




guardarTarea.tarea.forEach(insertarTarea);