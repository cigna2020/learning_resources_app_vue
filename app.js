function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            countAttack: 0,
            winner: null,
        }
    },
    methods: {
        attackMonster() {
            this.countAttack++;
            this.monsterHealth -= getRandomValue(5, 8);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= getRandomValue(8, 15);
        },
        specialAttack() {
            this.countAttack++;
            this.monsterHealth -= getRandomValue(10, 25);
            this.attackPlayer();
        },
        healPlayer() {
            this.countAttack++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack() {
            return this.countAttack % 3 !== 0;
        }
    },
    watch: {
        playerHealth() {
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (this.playerHealth <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth() {
            if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (this.monsterHealth <= 0) {
                this.winner = 'player'
            }
        }
    }
});

app.mount('#game');