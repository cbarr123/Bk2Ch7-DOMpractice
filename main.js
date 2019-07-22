const trucks = [
    {
        date: "07/20/2019",
        manufacturer: "Ford",
        model: "F150",
        color: "red",
    },
    {
        date: "07/20/2019",
        manufacturer: "Ford",
        model: "F250",
        color: "blue",
    },
    {
        date: "07/20/2019",
        manufacturer: "Dodge",
        model: "2500",
        color: "black",
    },
    {
        date: "07/20/2019",
        manufacturer: "Chevrolet",
        model: "1500",
        color: "white",
    },
]

// Todo Create a place to inject the HTML within the <body> tag
const whereToDisplayTheTrucks = document.querySelector("#container");

// todo Create an HTML representation of the data
const createTruckEntryComponent = (date, manufacturer, model, color) => {
    return `
        <section class="trucks">
            <div>${date}</div>
            <div><${manufacturer}/div>
            <div>${model}</div>
            <div>${color}</div>
        </section>    
    `
}

// todo Invoke the function 
// todo Inject the HTML
trucks.forEach(truck => {
    const htmlRepresentation = createTruckEntryComponent(truck.date, truck.manufacturer, truck.model, truck.color)
    whereToDisplayTheTrucks.innerHTML += htmlRepresentation

    });
