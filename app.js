const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    computed: {
        fullName() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Tsyg';
        }
    },
    methods: {
        outputFullname() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Tsyg';
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetName(event) {
            this.name = '';
        }
    }
});

app.mount('#events');
