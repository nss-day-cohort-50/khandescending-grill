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
            id: 3,
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

export const setProtein = (proteinId) => {
    database.bowlBuilder.proteinId = proteinId
}

export const setVegetable = (vegId) => {
    database.bowlBuilder.vegetableId = vegId
    debugger
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

export const getVeggies = () => {
    return database.vegetables.map(veg => ({...veg}))
}

export const getSeasonings = () => {
    return database.seasonings.map(seasoning => ({...seasoning}))
}

export const getCarbs = () => {
    return database.carbs.map(carb => ({...carb}))
}

export const getSizes = () => {
    return database.bowlSizes.map(size => ({...size}))
}

export const getSauces = () => {
    return database.sauces.map(sauce => ({...sauce}))
}


