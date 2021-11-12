var app = new Vue(
    {
        el: '#myApp',
        data: {
            tasks: [
                {
                    text: 'fare la spesa',
                    done: true
                },
                {
                    text: 'portare fuori la spazzatura',
                    done: false
                },
                {
                    text: 'bagnare i fiori',
                    done: true
                },
                {
                    text: 'pagare le bollette',
                    done: false
                },
                {
                    text: 'fare la lavatrice',
                    done: false
                }
            ]
        },
        methods: {
            doneItem(index){
                if(this.tasks[index].done === true) {
                    this.tasks[index].done = false;
                } else {
                    this.tasks[index].done = true;
                }                
            },
            removeItem(index){
                this.tasks.splice(index, 1);
            }
        }
    }
);