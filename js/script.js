const {
    createApp
} = Vue;

createApp({
    data() {
        return {
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
        delete(index){
            todolist.splice(index, 1)
            console.log(number)
        }
    }
}).mount('#app')