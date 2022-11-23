const { createApp } = Vue;
createApp({
    // data: function () {}
    data() {
        // la funzione data deve SEMPRE ritornare un oggetto
        return {

            todoTask: [
                {
                    text: "corso di corsivoe",
                    done: true,
                },
                {
                    text: "compiti",
                    done: false,
                },
                {
                    text: "voglia di vivere",
                    done: false,
                },
            ],
            addNewTask: {
                text: "",
                done: true
            }
        };
    },
    methods: {
        addTask() {
            this.todoTask.push({
                text: this.addNewTask.text,
            })

        },
        removeTask(a) {
            this.todoTask.splice(a, 1);
        }
    }
}).mount("#app")