
import {colocarImg} from "../js/components";

export class todoList{


    constructor(){

    
        this.cargarLocalStorage();

        // this.tarea = [];


    }


    añadirTarea( tarea ){

        this.tarea.push(tarea);

        this.guardarLocalStorage()

        console.log(this.tarea);

        return this.tarea;



    }

    eliminarTarea( id ){


        // console.info("si esta llegando a la funcion de eleiminar la tarea");

        this.tarea = this.tarea.filter(mama => mama.id != id);
        
        this.guardarLocalStorage()

        console.log(this.tarea);




  
        
    }

    marcarCompletado( id ){

        for(let todo of this.tarea){

            if(todo.id == id){

                todo.complete = !todo.complete;
                break;

            }

        }


        this.guardarLocalStorage()

        console.log(this.tarea);




    }

    eliminarCompletados(){


        this.guardarLocalStorage()

 

    }


    cuentaTarea(){

        return this.tarea;



    }

    guardarLocalStorage(){

        localStorage.setItem("USER", JSON.stringify(this.tarea));
        


    }




    cargarLocalStorage(){

        if( localStorage.getItem("USER")){

            this.tarea = JSON.parse(localStorage.getItem("USER"));

            // this.tarea.forEach();
            colocarImg(true);
            

            console.warn("estas son tus tareas", this.tarea, "la cantidad es " ,localStorage.getItem("USER").length );

        } else {

            this.tarea = [];
            colocarImg(false);
            
            alert("joder no hay nada en el arraaaaaay");



        }

        // localStorage.getItem("","");





    }







    
}