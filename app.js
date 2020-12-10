const app = Vue.createApp({
    data() {
        return {
            result: 0,
            number: 37,
            message: '',
            messageNotYet: 'Not there yet',
            messageTooMuch: 'Too much!'
        }
    },
    methods: {
        addNumber(num) {
            this.result += num;
        }
    },
    computed: {
        checker() {
            if (this.result === 0) {
                return "It's time to start!";
            }
            if (this.result < this.number) {
                return this.messageNotYet;
            }
            if (this.result > this.number) {
                return this.messageTooMuch
            }
            if (this.result == this.number) {
                return "Exactly!"
            }
        }
    },
    watch: {
        result(value) {
            const that = this;
            function resetResult() {
                that.result = 0
            };
            setTimeout(resetResult, 2000)
        }
    }

});

app.mount('#assignment');