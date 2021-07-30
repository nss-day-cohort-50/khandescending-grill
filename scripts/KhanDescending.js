import { Proteins } from "./Proteins.js"
import { Vegetables } from "./Vegetables.js"

export const KhanDescending = () => {

    const restaurantName = "Khan Descending"


    return `
        <h1>Welcome to ${restaurantName} (in case you didn't know where you were)</h1>

        <article class="options">
            <section>
                <h2>Proteins</h2>
                ${ Proteins() }
            </section>

            <section>
                <h2>Vegetables</h2>
                ${ Vegetables() }
            </section>
        </article>

        <article>
            This is where the orders will go
        </article>
    `
}