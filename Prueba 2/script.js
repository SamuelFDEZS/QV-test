const numeros = [1,8,13,17,80,58,10,66]

const numero = document.querySelector(".numero")
const SacarMayor = () => {
    return Math.max(...numeros)
}

numero.innerHTML = SacarMayor()