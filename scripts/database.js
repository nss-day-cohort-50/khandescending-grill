const database = {
    bowlBuilder: {},  // Transient state

    /*
        All permanent state is below
    */
    proteins: [
        {
            id: 1,
            name: "Armadillo",
            price: 5.00,
            isAnimal: true
        }
    ],
    vegetables: [
        {
            id: 1,
            name: "Green beans",
            price: 0.45,
            isGreen: true
        }
    ],
    carbs: [
        {
            id: 1,
            name: "Udon noodles",
            price: 3.79,
            isGluten: true
        }
    ],
    sauces: [
        {
            id: 1,
            name: "Hedge Maze",
            price: 0.80,
            isSpicy: true
        }
    ],
    seasonings: [
        {
            id: 1,
            name: "Dragon Salt",
            price: 0.05,
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

    ]
}