const brands = ["Jeep", "Nissan", " Honda", " Toyota", " Ford", "Fiat", "Chevrolet", "Citroën", "Hyundai", "Renault", "Volkswagen"];

const models = ["Onix", "HB20", "Ka", "Kwid", "Gol", "Argo", "Prisma",
    "Strada", "Renegade", "KaSedan", "Toro", "Polo", "Compass", "Corolla",
    "Creta", "Mobi", "Kicks", "Sandero", "HR-V", "Hilux", "Fox", "Virtus",
    "YarisSedan", "Saveiro", "Yaris", "HB20S", "Voyage", "EcoSport", "Fit",
    "S10", "Logan", "Spin", "Civic", "Duster", "Cronos", "Captur", "Tracker",
    "T-Cross", "Cruze", "Ranger", "Cactus", "Siena", "City", "Uno", "Tiguan",
    "Versa", "Cobalt", "Sedan", "SW4"];

function createCars(quantity) {
    let id = 0;
    let cars = [];

    while (id != quantity) {
        cars.push({
            id: id++,
            brand: getRandomicBrand(),
            model: getRandomicModel(),
            year: getRandomicYear()
        });
    }

    return quantity > 1 ? cars : cars[0];
}

function getRandomicBrand() {
    return brands[Math.floor((Math.random() * brands.length))];
}

function getRandomicModel() {
    return models[Math.floor((Math.random() * models.length))];
}

function getRandomicYear() {
    return Math.floor((Math.random() * 20) + 2000);
}

module.exports = {
    createCars
}