// const inputElem = document.querySelector('input');
// const buttonElem = document.querySelector('button');
// const ulElem = document.querySelector('ul');

// function addGoal() {
//     const inputValue = inputElem.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = inputValue;
//     ulElem.appendChild(listItem);
//     inputElem.value = '';
// }

// buttonElem.addEventListener('click', addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');