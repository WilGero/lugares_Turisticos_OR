document.getElementById("actual").addEventListener("click", getLocation);
// console.log(getLocation())
function getLocation() {
  navigator.geolocation.getCurrentPosition(onSuccess);
}

function onSuccess(position) {
  const c = [position.coords.latitude, position.coords.longitude];
  console.log(c);
  //   let coords = c.split(",");
  mapa1.flyTo(c, 15);
  L.marker(c).bindPopup('Esta es tu ubicacion').addTo(mapa1);
//   document.getElementById("ruta").addEventListener("click", ruta());
//   function ruta() {    
    document.getElementById('select-lugar').onchange = function(){
        let valor=this.value.split(",");
        console.log(valor);
        L.Routing.control({ 
            waypoints: [L.latLng(c), L.latLng(valor)],
            routeWhileDragging: true,
          }).addTo(mapa1);
    // }
    // const lugares= document.querySelector('#select-lugar')
    // lugares.addEventListener('change',()=>{
            // })
    // console.log(coords);
  }
}

// document.getElementById("actual").addEventListener("click", function (e) {
//   let coords = e.target.value.split(",");
//   mapa1.flyTo(coords, 18);
// });
// document
// .getElementById("select-lugar")
// .addEventListener("change", function (e) {
//   let coords = e.target.value.split(",");
//   mapa1.flyTo(coords, 18);
// });;
