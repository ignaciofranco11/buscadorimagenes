let boton = document.getElementById("btnBuscar");

function showData(Array) {
    let contenedor = document.getElementById("contenedor");
    let htmlContentToAppend = "";
    for (const item of Array) {
        htmlContentToAppend += `
        
        <div class="row">
            <div class="col-3">
                <img src="${item.links[0].href}" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1"> ${item.data[0].title}- </h4>
                   
                </div>
                <p class="mb-1">${item.data[0].description}</p>
                <p class="mb-1">${item.data[0].date_created}</p>
                </div>
                </div>`
        contenedor.innerHTML = htmlContentToAppend;
    }
}


boton.addEventListener("click", function () {
    let busqueda = document.getElementById("inputBuscar");

    let url = `https://images-api.nasa.gov/search?q=${busqueda.value}`;

    fetch(url)
        .then(response => response.json())
        .then(data => showData(data.collection.items))
})



