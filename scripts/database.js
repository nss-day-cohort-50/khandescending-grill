const database = {
    /*
        All permanent state is below
    */
    proteins: [
        {
            id: 1,
            name: "Armadillo",
            price: 5.00,
            isAnimal: true
        },
        {
            id: 2,
            name: "Panda",
            price: 7.50,
            isAnimal: true
        },
        {
            id: 3,
            name: "Beef",
            price: 2.50,
            isAnimal: true
        },
        {
            id: 4,
            name: "Tofu",
            price: 1.49,
            isAnimal: false
        }
    ],
    vegetables: [
        {
            id: 1,
            name: "Green beans",
            price: 0.45,
            isGreen: true
        },
        {
            id: 2,
            name: "Bean sprouts",
            price: 0.35,
            isGreen: false
        },
        {
            id: 3,
            name: "Lima beans",
            price: 0.29,
            isGreen: true
        },
        {
            id: 4,
            name: "Beets",
            price: 0.62,
            isGreen: false
        }
    ],
    carbs: [
        {
            id: 1,
            name: "Udon noodles",
            price: 3.79,
            isGluten: true
        },
        {
            id: 2,
            name: "Rice noodles",
            price: 2.50,
            isGluten: false
        },
        {
            id: 3,
            name: "Chocolate chunks",
            price: 1.99,
            isGluten: false
        }
    ],
    sauces: [
        {
            id: 1,
            name: "Hedge Maze",
            price: 0.80,
            isSpicy: true
        },
        {
            id: 2,
            name: "Plum Heaven",
            price: 0.72,
            isSpicy: false
        },
        {
            id: 3,
            name: "Southern Heat",
            price: 0.94,
            isSpicy: true
        },
        {
            id: 4,
            name: "Raisin Chicken Puree",
            price: 0.61,
            isSpicy: false
        }
    ],
    seasonings: [
        {
            id: 1,
            name: "Dragon Salt",
            price: 0.05,
            hasSodium: true
        },
        {
            id: 2,
            name: "Lemon Pepper",
            price: 0.07,
            hasSodium: false
        },
        {
            id: 3,
            name: "MSG",
            price: 0.03,
            hasSodium: true
        },
        {
            id: 4,
            name: "Habanero Explosion",
            price: 0.09,
            hasSodium: false
        }
    ],
    bowlSizes: [
        {
            id: 1,
            size: "Bucket"
        },
        {
            id: 2,
            size: "Bread box"
        },
        {
            id: 3,
            size: "Rubbish Bin"
        }
    ],
    bowls: [

    ],

    bowlBuilder: {},  // Transient state
}

export const getBowlBuilder = () => {
    return {...database.bowlBuilder}
}

/*
    Build something that holds the custom orders
*/
export const wholeBunchaStuff = () => {
    // Convert transient to permanent state
    const copyOfBowlBuilder = {...database.bowlBuilder}

    // Add an `id`
    if (database.bowls.length === 0) {
        copyOfBowlBuilder.id = 1
    }
    else {
        const lastIndex = database.bowls.length - 1
        copyOfBowlBuilder.id = database.bowls[lastIndex].id + 1
    }

    // Add a timestamp
    copyOfBowlBuilder.timestamp = Date.now()

    // Make it permanent
    database.bowls.push(copyOfBowlBuilder)

    // Reset transient state
    database.bowlBuilder = {}

    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getOrders = () => {
    return database.bowls.map(bowl => ({...bowl}))
}

export const getProteins = () => {
    return database.proteins
        .map(protein => ({...protein}))
        .sort( (firstObject, secondObject) => (firstObject.name > secondObject.name) ? 1 : -1 )
        .reverse()
}

export const setCarb = (carbId) => {
    database.bowlBuilder.carbId = carbId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getVeggies = () => {
    return database.vegetables.map(veg => ({...veg}))
}

export const setVegetable = (vegId) => {
    database.bowlBuilder.vegetableId = vegId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getSeasonings = () => {
    return database.seasonings.map(seasoning => ({...seasoning}))
}

export const setSeasoning = (seasoningId) => {
    database.bowlBuilder.seasoningId = seasoningId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getCarbs = () => {
    return database.carbs.map(carb => ({...carb}))
}

export const setProtein = (proteinId) => {
    database.bowlBuilder.proteinId = proteinId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getSizes = () => {
    return database.bowlSizes.map(size => ({...size}))
}

export const getSauces = () => {
    return database.sauces.map(sauce => ({...sauce}))
}

export const setSauce = (sauceId) => {
    database.bowlBuilder.sauceId = sauceId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getOptions = () => {
    const options = new Map()

    options.set("carb", database.carbs.find(carb => database.bowlBuilder.carbId === carb.id))
    options.set("protein", database.proteins.find(protein => database.bowlBuilder.proteinId === protein.id))
    options.set("sauce", database.sauces.find(sauce => database.bowlBuilder.sauceId === sauce.id))
    options.set("seasoning", database.seasonings.find(seasoning => database.bowlBuilder.seasoningId === seasoning.id))
    options.set("vegetable", database.vegetables.find(veg => database.bowlBuilder.vegetableId === veg.id))

    return options
}
