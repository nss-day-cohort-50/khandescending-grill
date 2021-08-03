import { getBowlBuilder, getCarbs, setCarb } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "carb") {
            setCarb(parseInt(changeEvent.target.value))
        }
    }
)

export const Carbs = () => {
    const allcarbs = getCarbs()
    const chosenOptions = getBowlBuilder()

    let html = "<ul class='carbs ul--options'>"

    const carbListItemsString = allcarbs
        .map((carbObject) => {
            return `<li class="carb">
                    <input
                    ${ (carbObject.id === chosenOptions.carbId) ? "checked" : "" }
                    type="radio" name="carb" value="${carbObject.id}" />${carbObject.name}
                </li>`
        })
        .join("")

    html += `${carbListItemsString}</ul>`

    return html
}
