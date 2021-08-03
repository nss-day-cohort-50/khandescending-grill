import { getBowlBuilder, getProteins, setProtein } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "protein") {
            setProtein(parseInt(changeEvent.target.value))
        }
    }
)

export const Proteins = () => {
    const allProteins = getProteins()
    const chosenOptions = getBowlBuilder()

    let html = "<ul class='proteins ul--options'>"

    const proteinHTMLArray = allProteins.map(
        // The end result of this method will be an array of string
        (proteinObject) => {
            return `<li class="protein">
                <input type="radio"
                ${ (proteinObject.id === chosenOptions.proteinId) ? "checked" : "" }
                name="protein"
                value="${proteinObject.id}" />
                ${proteinObject.name}
            </li>`



        }
    )

    html += proteinHTMLArray.join("")
    html += "</ul>"

    return html

}
