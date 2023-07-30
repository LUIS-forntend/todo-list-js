import {todo} from "../classes";
import {guardarTarea} from "../index.js";



const listaTarea = document.querySelector(".todo-list");
const inputTarea = document.querySelector(".new-todo");
const btnBorrarTodos = document.querySelector(".clear-completed");
const sectionFiltros = document.querySelector(".filters");
const activeFiltros = document.querySelectorAll(".filtro");

const contadorTodoList = document.querySelector("strong");
const emplywork = document.querySelector(".img_emply_work" , ".hidden");


export function insertarTarea(tarea){
    

    const crearDiv = document.createElement("div");
    const contenedorTarea = `<li class="${(tarea.complete == true)?"completed":""}" data-id="${tarea.id}">
                                    <div class="view">
                                        <input class="toggle" type="checkbox"  ${(tarea.complete == true)?"checked":""}>
                                        <label>${tarea.tarea}</label>
                                        <button class="destroy"></button>
                                    </div>
                                    <input class="edit" value="Create a TodoMVC template">
                                </li>`;

    crearDiv.innerHTML = contenedorTarea;  

    
    
    listaTarea.appendChild(crearDiv.firstElementChild);

    // alert("Tarea completada");
    return crearDiv.firstElementChild;
 

}


export function colocarImg(decision){
    decision?emplywork.classList.add("hidden"):emplywork.classList.remove("hidden");
} 



// listaTarea.addEventListener("wiew", ()=>{


if(true){

    console.warn({"arjonaCuenta" : listaTarea.childElementCount});

}



// });


// EVENTOS


let contador = 0;

inputTarea.addEventListener("keyup",(event)=>{

if (event.keyCode === 13 && inputTarea.value.length > 0  ){

    console.log("joder machucaste enter");
    const saveTarea = new todo (inputTarea.value);

    guardarTarea.añadirTarea(saveTarea);
    
    insertarTarea(saveTarea);

    inputTarea.value = "";

    




   

    contador++;




    contadorTodoList.innerHTML = contador;




}



})



listaTarea.addEventListener("click", event=>{

    console.log("click");
    const typeClick = event.target.localName;
    console.log(typeClick);
    const contenedorTarea = event.target.parentElement.parentElement;
    const contenedorTarea2 = event.target.parentElement.parentElement.parentElement;

    console.error(contenedorTarea);
    const  idTarea = contenedorTarea.getAttribute("data-id");

    if(typeClick == "input"){

        guardarTarea.marcarCompletado(idTarea);
        contenedorTarea.classList.toggle("completed");



    }else if (typeClick == "button"){

        guardarTarea.eliminarTarea(idTarea);
        listaTarea.removeChild(contenedorTarea);
        
     
    }



});


// btnBorrarTodos.disabled = true;


// if(listaTarea.children.length > 0){


//     // btnBorrarTodos.disabled = false;
//     console.warn("hay muchas tareas");

// }


console.log({papaaaaaaaaaaaaaa : listaTarea.childElementCount});






btnBorrarTodos.addEventListener("click",(event)=>{

       

        console.log({"mama joder ": listaTarea.childElementCount});
        console.log({"papa joder  ": listaTarea.children.length});
        

        if(listaTarea.childElementCount > 0){

            // btnBorrarTodos.disabled = false;

        // const contenedorTarea = event.target.parentElement.parentElement;

                for( let X = listaTarea.children.length-1; X >= 0; X-- ){

                    const tareaEliminar = listaTarea.children[X];


                        if(tareaEliminar.classList.contains("completed")){

                            listaTarea.removeChild(tareaEliminar);                
            
                        }       
                    
                }
        


        }else if(listaTarea.childElementCount == 0){

               

                alert("Has tu deberes vago.....");


        }




            // console.warn(tareaEliminar);



        }    



        );


        sectionFiltros.addEventListener("click",(event)=>{


            // alert("PRESIONASTE ALGUNOS DE LOS BOTONES");
            const toque = event.target.text;
            if(!toque) {return};

            activeFiltros.forEach(filtro=>filtro.classList.remove("selected"));

            event.target.classList.add("selected");



            for(const tipoBtn of listaTarea.children ){

                tipoBtn.classList.remove("hidden");
                const completado = tipoBtn.classList.contains("completed");

        
            switch(toque){

                case "Pendientes":
                     
                    if(completado){
                        console.log("presionaste PENDIENTE");
                       tipoBtn.classList.add("hidden");
                     }
                    break;

                case "Completados":
                    
                    if(!completado){
                        console.log("presionaste COMPLETADO");    
                        tipoBtn.classList.add("hidden");
                      }
                    break;

                     

                // case "Todos":    
                //      console.log("presionaste TODOS");
                //      break;



            }



        }




        });







        console.log({"papa  ": listaTarea.children.length});
