import { getCarbs, getOrders, getProteins, getSauces, getSeasonings, getVeggies } from "./database.js"

export const CompletedOrders = () => {
    const allOrders = getOrders()

    return `
        <ul>
        ${
            allOrders.map(
                (order) => {
                    const proteins = getProteins()
                    const vegetables = getVeggies()
                    const sauces = getSauces()
                    const seasonings = getSeasonings()
                    const carbs = getCarbs()

                    // Find a buncha stuff
                    const foundProtein = proteins.find(protein => {
                        return protein.id === order.proteinId
                    })

                    const foundVegetable = vegetables.find(vegetable => {
                        return vegetable.id === order.vegetableId
                    })

                    const foundSauce = sauces.find(sauce => {
                        return sauce.id === order.sauceId
                    })

                    const foundSeasoning = seasonings.find(seasoning => {
                        return seasoning.id === order.seasoningId
                    })

                    const foundCarb = carbs.find(carb => {
                        return carb.id === order.carbId
                    })

                    const thePriceOfAllOfMyFoundObjects = foundCarb.price +
                        foundProtein.price +
                        foundVegetable.price +
                        foundSauce.price +
                        foundSeasoning.price

                    return `<li>Order ${ order.id } will cost $${ thePriceOfAllOfMyFoundObjects.toFixed(2) }</li> `
                }
            ).join("")
        }
        </ul>
    `
}