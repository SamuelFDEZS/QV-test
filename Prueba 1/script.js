let text = "Hola mundo";
const showtext = document.querySelector(".show-text")

const ReverseWord = (event) => {
    let reverted = event.target.value.split("").reverse().join("")
    showtext.innerHTML = reverted
}