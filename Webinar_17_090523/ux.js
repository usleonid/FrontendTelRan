const alertBtn = document.getElementById('alert')
const confirmBtn = document.getElementById('confirm')
const promptBtn = document.getElementById('prompt')


alertBtn.addEventListener('click', () => {
    alert('Вы успешно кликнули по кнопке')
})

confirmBtn.addEventListener('click', () => {
    const decision = confirm('Вы хотите зайти?')
    if (decision) {
        alert('Welcome')
    } else {
        alert('Wait you later')
    }
})

promptBtn.addEventListener('click', () => {
    const age = prompt('How old are you?')

    console.log(age);

   if (!age) {
    return
   }

    if (+age >= 18) {
        console.log('Welcome');
    } else {
        console.log('You are very younger');
    }
})