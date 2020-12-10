const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullname: ''
        };
    },
    computed: {
        fullName() {
            console.log('Running again...');
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + this.fullname;
        },
        secondName() {
            if (fullname === '') {
                return '';
            }
            return this.fullname;
        },
    },

    watch: {
        name(value) {
            this.name = value;
            console.log('Watch!')
        },

        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
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
            this.fullname = '';
        }
    }
});

app.mount('#events');
