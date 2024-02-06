import {
  getTransport,
  postService
} from "./apiFetch.js";
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const formService = document.getElementById("form_service");
const modal = document.getElementById("modal");
const listVehicle = document.getElementById('vehicle');
const mile = document.querySelector('.millas');
const price = document.getElementById('price');
let calcular = 0

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
  // borrar o limpiar los inputs
});

document.addEventListener('DOMContentLoaded', () => {
  getTransport()
    .then(response => {
      const list = response.message;

      list.map(vehicle => {
        const optionTag = document.createElement('option');
        optionTag.setAttribute('value', vehicle.transporte.nombre)
        optionTag.textContent = vehicle.transporte.nombre
        listVehicle.append(optionTag);
      });
    })
    .catch(err => console.log(err));

  console.log(mile)
  mile.addEventListener('change', () => {
    calcular = mile.value * 4;
    price.setAttribute('value', `${calcular}`)
    price.textContent = `Precio total: ${calcular}`;

  })
})

formService.addEventListener("submit", (event) => {
  event.preventDefault();

  const service = {
    fullName: event.target.fullName.value,
    cedula: event.target.cedula.value,
    email: event.target.email.value,
    phoneNumber: event.target.phoneNumber.value,
    asunto: event.target.subject.value,
    vehicle: event.target.listVechicle.value,
    location: event.target.location.value,
    destino: event.target.arrive.value,
    millas: event.target.mile.value,
    price: calcular,
    descripcion: event.target.description.value,
  }

  postService(service)
    .then(() => alert('Servicio creado!'))
    .then(() => {
      modal.classList.remove("open");
    })
    .catch(err => console.log(err));
})