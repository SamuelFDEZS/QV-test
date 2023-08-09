const numeros = [1,6,8,12,5,67,8,54,75,345]

let sumaPares = 0
const numero = document.querySelector(".numero")

for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        sumaPares += numeros[i]
    }
}

numero.innerHTML = sumaPares