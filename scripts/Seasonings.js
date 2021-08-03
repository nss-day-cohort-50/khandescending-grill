import { getBowlBuilder, getSeasonings, setSeasoning } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "seasoning") {
            setSeasoning(parseInt(changeEvent.target.value))
        }
    }
)

export const Seasonings = () => {
    const allseasonings = getSeasonings()
    const chosenOptions = getBowlBuilder()

    let html = "<ul class='seasonings ul--options'>"

    const seasoningListItemsString = allseasonings
        .map((seasoningObject) => {
            return `<li class="seasoning">
                    <input
                    ${ (seasoningObject.id === chosenOptions.seasoningId) ? "checked" : "" }
                    type="radio" name="seasoning" value="${seasoningObject.id}" />${seasoningObject.name}
                </li>`
        })
        .join("")

    html += `${seasoningListItemsString}</ul>`

    return html
}
