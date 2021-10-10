async function consultarApi() {

    let urlApiLocal = './data.json'
    try {
        let responseText = await fetch(urlApiLocal, { method: 'get' });
        // console.log(responseText);
        let responseJson = await responseText.json();
        // console.log(responseJson);
        pintarInfo(responseJson);
        return responseJson.servicios;
    } catch (error) {
        console.log(error)
    }
}
consultarApi();

const pintarInfo = info => {

    menu1 = document.getElementById('menu1');
    menu2 = document.getElementById('menu2');
    menu3 = document.getElementById('menu3');
    menu4 = document.getElementById('menu4');
    img1 = document.getElementById('img1');
  
    menu1.children[0].innerText= info.navbar[0].caso1;
    menu2.children[0].innerText= info.navbar[0].caso2;
    menu3.children[0].innerText= info.navbar[0].caso3;
    menu4.children[0].innerText= info.navbar[0].caso4;
    img1.children[0].src = info.navbar[0].caso5;


    servicio1 = document.getElementById('servicio1');
    servicio2 = document.getElementById('servicio2');
    servicio3 = document.getElementById('servicio3');

    servicio1.children[2].src = info.servicios[0].imagen;
    servicio1.children[0].innerText = info.servicios[0].titulo;
    servicio1.children[1].innerText = info.servicios[0].descripcion;

    servicio2.children[2].src = info.servicios[1].imagen;
    servicio2.children[0].innerText = info.servicios[1].titulo;
    servicio2.children[1].innerText = info.servicios[1].descripcion;

    servicio3.children[2].src = info.servicios[2].imagen;
    servicio3.children[0].innerText = info.servicios[2].titulo;
    servicio3.children[1].innerText = info.servicios[2].descripcion;

}
