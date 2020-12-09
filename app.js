const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        changeName(lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        submitForm() {
            alert('Submitted!')
        },
        confirmedText(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        }

    }
});

app.mount('#events');
