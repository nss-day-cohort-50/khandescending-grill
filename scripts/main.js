import { KhanDescending } from "./KhanDescending.js";


const containerForAllTheHTML = document.querySelector("#container")

document.addEventListener(
    "stateChanged",
    () => {
        console.log("State was changed, time to regenerate ALL OF THE HTML!!!!!!!!!!")
        renderTheHTML()
    }
)

const renderTheHTML = () => {
    containerForAllTheHTML.innerHTML = KhanDescending()
}

renderTheHTML()
