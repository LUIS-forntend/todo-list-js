export class todo {


    constructor ( tarea ){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.complete = false;
        this.creado = new Date();

    }

}