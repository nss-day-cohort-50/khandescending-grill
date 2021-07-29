import { KhanDescending } from "./KhanDescending.js";


const containerForAllTheHTML = document.querySelector("#container")

const renderTheHTML = () => {
    containerForAllTheHTML.innerHTML = KhanDescending()
}

renderTheHTML()

