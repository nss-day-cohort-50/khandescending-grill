import { KhanDescending } from "./KhanDescending.js";


const containerForAllTheHTML = document.querySelector("#container")

const renderTheHTML = () => {
    containerForAllTheHTML.innerHTML = KhanDescending()
}

renderTheHTML()


document.addEventListener(
    "stateChanged",
    (customEvent) => {
        console.log("State was changed, time to regenerate ALL OF THE HTML!!!!!!!!!!")
        renderTheHTML()
    }
)
