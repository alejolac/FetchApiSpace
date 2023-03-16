let url = "https://images-api.nasa.gov/search?q=";
const btn = document.getElementById("btnBuscar");
const btnBuscar = document.getElementById("inputBuscar");
const  busqueda = btn.addEventListener("click" , Buscar);

async function Buscar () {
    conte.innerHTML = "";
    let a = url + btnBuscar.value; 
    let promesa = await fetch (a);
    let respuesta = await promesa.json();
    
    const {
        collection: {items}
    } = respuesta;

    for (const item of items) {
        const {
            data: [data],
            links: [link]
        } = item;
        const { title, date_created, description} = data;
        const {href} = link;

        Llenar (title, date_created, description, href);
    }}

function Llenar (a , b, c, d) {
    let html = "";

        html += `
            <div class="col-sm-4">
                <div class="card mb-2">
                    <img src="${d}" class="card-img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text"><span>${a}</span><br>${c}</p>
                        <div class="card-footer">
                        <small class="text-muted">${b}</small>
                        </div>
                    </div>
                </div>
            </div>
        `
        conte.innerHTML += html;

}
