import { Proteins } from "./Proteins.js"

export const KhanDescending = () => {

    const restaurantName = "Khan Descending"


    return `
        <h1>Welcome to ${restaurantName} (in case you didn't know where you were)</h1>

        <h2>Proteins</h2>
        ${ Proteins() }
    `
}