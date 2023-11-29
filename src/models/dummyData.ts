interface CarList {
    id: number;
    type: string;
    brand: string;
    year: number;

}

const cars: CarList[] = [
    {
        id: 1,
        type: "small",
        brand: "avanza",
        year: 2022
    },
    {
        id: 2,
        type: "medium",
        brand: "veloz",
        year: 2022
    },
    {
        id: 3,
        type: "large",
        brand: "hyundai",
        year: 2022
    }
]

module.exports = cars;