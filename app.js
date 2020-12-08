const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Will be the Best!',
            courseGoalA: 'Finish the course.',
            courseGoalB: 'Make amazing App.',
            courseLink: 'https:vagtec.com.ua'
        }
    },

    methods: {
        mathRandom() {
            const mathRandom = Math.random();
            if (mathRandom < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');