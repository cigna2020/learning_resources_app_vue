const app = Vue.createApp({
    data() {
        return {
            userName: 'Alexander Tsyh',
            userAge: '37',
            imageLink: 'https://isha.sadhguru.org/blog/wp-content/uploads/2016/05/natures-temples.jpg'
        }
    },
    methods: {
        userAgeAdd5() {
            const toNumber = Number.parseInt(this.userAge);
            const userAgeAdd5 = toNumber + 5;
            return userAgeAdd5;
        },
        randomNumber() {
            randomNumber = Math.random();
            return Math.round(randomNumber);
        }
    }
});

app.mount('#assignment');