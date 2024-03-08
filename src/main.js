
import {randomNumber, randomString, randomSpecial, randomLowerCaseString} from "./modules/random"
import "7.css/dist/7.css";
import './assets/css/style.css';


const gerarSenha = (qtdChar, funcoesAleatorias) => {
    let senha = "";
    for(let i = 0; i < qtdChar; i++){
        const randomIndex = Math.floor(Math.random() * funcoesAleatorias.length);
        const funcaoAleatoria = funcoesAleatorias[randomIndex];
        senha += funcaoAleatoria();
    }
    console.log(senha)
    return senha
}

const quantidadeInput = document.getElementById('quantidade');
const maiusculaCheckbox = document.getElementById('maiuscula');
const minusculaCheckbox = document.getElementById('minuscula');
const especialCheckbox = document.getElementById('especial');
const numerosCheckbox = document.getElementById('numeros');
const button = document.getElementById('gerar');

button.addEventListener("click", (event) => {
    gerar(event)
})

const resultado = document.getElementById("resultado")
function gerar(event){
    event.preventDefault();
    const qtdChar = quantidadeInput.valueAsNumber;
    const usarMaiuscula = maiusculaCheckbox.checked;
    const usarMinuscula = minusculaCheckbox.checked;
    const usarEspecial = especialCheckbox.checked;
    const usarNumeros = numerosCheckbox.checked;
    const tipos = []
    if(usarMaiuscula) tipos.push(randomString);
    if(usarMinuscula) tipos.push(randomLowerCaseString);
    if(usarEspecial) tipos.push(randomSpecial);
    if(usarNumeros) tipos.push(randomNumber);
    if(tipos.length === 0 || !qtdChar) return

    resultado.innerText = gerarSenha(qtdChar, tipos)
}

