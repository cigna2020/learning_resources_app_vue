const app = Vue.createApp({
    data() {
        return {
            name: '',
            visible: true,
            // newBackgroundColor: '',
            inputStyle: '',
        }
    },
    methods: {
        // changeName() {
        //     this.name = event.target.value;
        // },
        toggleVisible() {
            this.visible = !this.visible;
            // if (!this.visible) {
            //     console.log('false');
            //     this.visible = true;
            //     return 'hidden';
            // } if (this.visible) {
            //     console.log('true');
            //     this.visible = false;
            //     return 'visible';
            // }
        },
        // changeBGC() {
        //     this.newBackgroundColor = event.target.value;
        //     return this.newBackgroundColor;
        // }

    },
    computed: {
        // userClass() {
        //     if (this.name == 'user1') {
        //         return 'user1'
        //     } if (this.name == 'user2') {
        //         return 'user2'
        //     }
        // },
        toggleClass() {
            // if (this.visible) {
            //     return 'hidden';
            // } else {
            //     return 'visible';
            // }
            return {
                visible: this.visible,
                hidden: !this.visible
            }
        },

    }
});

app.mount('#assignment');