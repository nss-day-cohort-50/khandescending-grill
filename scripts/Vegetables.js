import { getVeggies, setVegetable } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "vegetable") {
            setVegetable(parseInt(changeEvent.target.value))
        }
    }
)

export const Vegetables = () => {
    const allVegetables = getVeggies()
    let html = "<ul class='vegetables ul--options'>"

    const vegetableListItemsString = allVegetables
        .map((vegetableObject) => {
            return `<li class="vegetable">
                    <input type="radio" name="vegetable" value="${vegetableObject.id}" />${vegetableObject.name}
                </li>`
        })
        .join("")

    html += `${vegetableListItemsString}</ul>`

    return html
}
