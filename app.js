const app = Vue.createApp({
    data() {
        return {
            name: '',
            visible: true,
        }
    },
    methods: {
        changeName() {
            this.name = event.target.value;
        },
        toggleVisible() {
            if (!this.visible) {
                console.log('false');
                this.visible = true;
                return 'hidden';
            } if (this.visible) {
                console.log('true');
                this.visible = false;
                return 'visible';
            }
        }


    },
    computed: {
        userClass() {
            if (this.name == 'user1') {
                return 'user1'
            } if (this.name == 'user2') {
                return 'user2'
            }
        },
        toggleClass() {
            if (this.visible) {
                return 'hidden';
            } else {
                return 'visible';
            }
        }
    }
});

app.mount('#assignment');