import { getProteins } from "./database.js"

export const Proteins = () => {
    const allProteins = getProteins()
    let html = "<ul>"

    const proteinHTMLArray = allProteins.map(
        // The end result of this method will be an array of string
        (proteinObject) => {
            return `<li>
                <input type="radio" name="protein" value="${proteinObject.id}" />${proteinObject.name}
            </li>`
        }
    )

    html += proteinHTMLArray.join("")

    html += "</ul>"

    return html
}
