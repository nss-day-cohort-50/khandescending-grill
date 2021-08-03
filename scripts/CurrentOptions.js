import { getOptions } from "./database.js"


export const ChosenOptions = () => {
    const options = getOptions()

    let html = `<article class="cart">
        <ul class="ul--options chosen">
            ${
                [...options].map(
                    ([, obj]) => {
                        return obj ? `<li>${ obj?.name }: $${ obj?.price }</li>` : ""
                    }
                ).join("")
            }
        </ul>
        <div class="subTotal">
            Your bowl price will be $${
                [...options].reduce(
                    (curr, [, obj]) => {
                        return obj ? curr + obj.price : curr
                    }
                    , 0
                ).toFixed(2)
            }
        </div>
    </article>`

    return html
}
