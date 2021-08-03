import { getBowlBuilder, getSauces, setSauce } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "sauce") {
            setSauce(parseInt(changeEvent.target.value))
        }
    }
)

export const Sauces = () => {
    const allsauces = getSauces()
    const chosenOptions = getBowlBuilder()

    let html = "<ul class='sauces ul--options'>"

    const sauceListItemsString = allsauces
        .map((sauceObject) => {
            return `<li class="sauce">
                    <input
                    ${ (sauceObject.id === chosenOptions.sauceId) ? "checked" : "" }
                    type="radio" name="sauce" value="${sauceObject.id}" />${sauceObject.name}
                </li>`
        })
        .join("")

    html += `${sauceListItemsString}</ul>`

    return html
}
