const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            newTask: '',
            show: true,
            buttonText: '',
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newButtonText();
        },
        toggleList() {
            this.show = !this.show;
            this.newButtonText();
        },
        newButtonText() {
            if (this.show) {
                this.buttonText = 'Hide';
            } else {
                this.buttonText = 'Show List';
            }
        }
    }
});

app.mount('#assignment');