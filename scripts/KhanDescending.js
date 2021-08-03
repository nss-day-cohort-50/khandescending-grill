import { Carbs } from "./Carbs.js"
import { CompletedOrders } from "./CompletedBowlOrders.js"
import { ChosenOptions } from "./CurrentOptions.js"
import { wholeBunchaStuff } from "./database.js"
import { Proteins } from "./Proteins.js"
import { Sauces } from "./Sauces.js"
import { Seasonings } from "./Seasonings.js"
import { Vegetables } from "./Vegetables.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "completeButton") {
            wholeBunchaStuff()
        }
    }
)

export const KhanDescending = () => {

    const restaurantName = "Khan Descending"

    return `
        <h1 class="welcome">Welcome to ${restaurantName} (in case you didn't know where you were)</h1>

        <article class="options">
            <section class="option" id="proteinOptions">
                <h2>Proteins</h2>
                ${ Proteins() }
            </section>

            <section class="option">
                <h2>Vegetables</h2>
                ${ Vegetables() }
            </section>

            <section class="option">
                <h2>Sauces</h2>
                ${ Sauces() }
            </section>

            <section class="option">
                <h2>Seasonings</h2>
                ${ Seasonings() }
            </section>

            <section class="option">
                <h2>Carbs</h2>
                ${ Carbs() }
            </section>
        </article>

        <article>
            ${ ChosenOptions() }
        </article>


        <article>
            <section class="purchase">
                <button id="completeButton">Complete your Bowl</button>
            </section>
        </article>

        <article>
            ${ CompletedOrders() }
        </article>
    `
}