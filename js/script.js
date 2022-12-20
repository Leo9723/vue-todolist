const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            listitem: '',
            newtodo: '',
            todolist : [
                {
                    text: 'fare la spesa',
                    done: false,
                    toggle: true
                 },
                 {
                    text: 'fare regali di natale',
                done: false,
                toggle: true
                 },
                 {
                    text: 'preparare pranzo natale',
                done: true,
                toggle: true
                 },
                 {
                    text: 'prenotare per capodanno',
                done: false,
                toggle: true
                 },
                 {
                    text: 'preparare il cacciucco',
                done: true,
                toggle: true
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
        },
        modifyitem(number) {
            if(this.todolist[number].toggle == true) {
                this.todolist[number].toggle = false
            }
            else {
                this.todolist[number].toggle = true
            }
        }
    }
}).mount('#app')