// convert list of route possibility pairs to destination object

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",g
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

class roadMap {

    constructor(roads) {

        for (let road of roads) {

            let splitRoad = road.split('-');   
            let a = splitRoad[0];
            let b = splitRoad[1];

            if (this[a] == null) {
                this[a] = [b];
            }
            else if (!this[a].includes(b))
            {
                this[a].push(b);
            }

            if (this[b] == null) {
                this[b] = [a];
            }
            else if (!this[b].includes(a))
            {
                this[b].push(a);
            }

        }
    }

}

console.log(new roadMap(roads));

//let first = new VillageState( "Post Office", [{place: "Post Office", address: "Alice's House"}]);

class VillageState {

    constructor(place, parcels) {

    }
    
    move(destination) {

    }
}