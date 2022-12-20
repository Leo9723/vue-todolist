const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            newtodo: '',
            todolist : [
                {
                    text: 'fare la spesa',
                done: false
                 },
                 {
                    text: 'fare regali di natale',
                done: false
                 },
                 {
                    text: 'preparare pranzo natale',
                done: true
                 },
                 {
                    text: 'prenotare per capodanno',
                done: false
                 },
                 {
                    text: 'preparare il cacciucco',
                done: true
                 }
            ]
        }
    },
    methods: {
        remove(number){
            this.todolist.splice(number, 1);
        },
        addtodo(newitem, number){
            newitemarray = {
                text: this.newtodo,
                done: false
            },
            this.todolist.push(newitemarray)
            this.newtodo = ''
        },
        barclick(number){
            if(this.todolist[number].done == false) {
                this.todolist[number].done = true
            }
            else {
                this.todolist[number].done = false
            }
        }
    }
}).mount('#app')