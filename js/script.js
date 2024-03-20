import { Modal } from './modal.js';
import { AlertError } from './alert_error.js';
import { calculateIMC, notANumber } from './ultils.js';


// variáveis 

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


// função do modal

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    // alerta de erro quando inserir outro caractere que não for um número
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `O seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}







