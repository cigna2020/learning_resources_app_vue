const app = Vue.createApp({
    data() {
        return {
            showAlertText: '',
            showAlertTextEnter: ''
        }
    },

    methods: {
        showAlert() {
            alert('It should be some text here!');
        },
        keyDown(event) {
            this.showAlertText = event.target.value;
        },
        keyDownEnter(event) {
            this.showAlertTextEnter = event.target.value;
        }
    }
});

app.mount('#assignment')