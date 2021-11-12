// istanza di VUE 
var app = new Vue(
    {
        el: '#myApp',
        data: {
            // oggetto della nuova task 
            newTask: {
                text: '',
                done: false
            },
            // lista task già presenti 
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'portare fuori la spazzatura',
                    done: false
                },
                {
                    text: 'bagnare i fiori',
                    done: false
                },
                {
                    text: 'pagare le bollette',
                    done: false
                },
                {
                    text: 'fare la lavatrice',
                    done: false
                },
            ]
        },
        // funzioni
        methods: {
            // aggiunge e toglie la riga se il task è completo 
            doneItem(index){
                if(this.tasks[index].done === true) {
                    this.tasks[index].done = false;
                } else {
                    this.tasks[index].done = true;
                }                
            },
            // elimina il task 
            removeItem(index){
                this.tasks.splice(index, 1);
            },
            // aggiunge nuova task 
            addItem(){
                if (this.newTask.text[0] !== ' ' && this.newTask.text.length > 0) {
                    this.tasks.push(this.newTask);
                    this.newTask = {text: '',done: false};
                }
            }
        }
    }
);