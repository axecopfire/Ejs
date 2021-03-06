// The Town of Meadowfield
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null ) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    // This is a for of loop, which is just a fancy (well supported but not in ie loop syntax. This way we don't have to actually track the iteration count through, you can just instantiate some variables)
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    // console.log(graph);
    return graph;
}

const roadGraph = buildGraph(roads);

// Now we are going to instantiate the state of the Village. EJS warns against instantiating too many classes as not to create a confusing amount of objects.
class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            // I feel like this section possibly is too condensed
            let parcels = this.parcels
                .map(p => {
                    // This seems intense to look through and map all the places to destinations and addresses. Still looking
                    if (p.place != this.place) return p;
                    return {
                        place: destination, 
                        address: p.address
                    };
                })
                // This would be filtering for every place that does not equal the address
                .filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    } 
}

/* Small little Test case that shows it works */
/* let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place); */

function runRobot(state, robot, memory) {
    // This is super cool imo. I've usually seen the fail state in the for loop declaration. Seems pretty confident to put in the break state of an if statement. Can't wait til I get that kind of confidence
    for (let turn = 0; ; turn++) {
        if(state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}