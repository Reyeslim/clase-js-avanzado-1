// EJERCICIO 1: Function vs Arrow Function

// function saludar(nombre) {
//   return `Hola ${nombre}`
// }

// console.log(saludar("Reyes"))

// const saludarArrow = (nombre) => {
//   return `Hola ${nombre} arrow`
// }

// console.log(saludarArrow("Reyes"))

// const saludarSimple = (nombre) => `Hola ${nombre} simple`
// console.log(saludarSimple("Reyes"))

// EJERCICIO 2: Crear y Usar Objetos
const persona1 = {
  nombre: "Laura",
  edad: 28,
  ciudad: "Madrid",
  profesion: "Desarrolladora",
  saludar: function () {
    return `Soy ${this.nombre}`
  },
}

// console.log(persona1)
// console.log(persona1.nombre)
// console.log(persona1.saludar())

const persona2 = {
  nombre: "David",
  edad: 30,
  ciudad: "Barcelona",
}

persona2["profesion"] = "Camarero"
delete persona2.edad

// console.log(persona2)

// EJERCICIO 3: Arrays de Objetos

const estudiantes = [
  {
    nombre: "Pedro",
    edad: 22,
    curso: "Full Stack",
    nota: 8.5,
  },
  {
    nombre: "Marta",
    edad: 24,
    curso: "Full Stack",
    nota: 9.2,
  },
  {
    nombre: "Jorge",
    edad: 23,
    curso: "Full Stack",
    nota: 7.8,
  },
  {
    nombre: "Elena",
    edad: 21,
    curso: "Full Stack",
    nota: 9.5,
  },
]

// console.log(estudiantes)

// EJERCICIO 4: Recorrer Arrays de Objetos con For
// for (let i = 0; i < estudiantes.length; i++) {
//   console.log(`${estudiantes[i].nombre} - Nota: ${estudiantes[i].nota}`)
// }
// EJERCICIO 5: Usar MAP para Transformar
const nombresEstudiantes = estudiantes.map((estudiante) => estudiante.nombre)

console.log(`Solo nombres:`, nombresEstudiantes)

const notasEstudiantes = estudiantes.map((estudiante) => estudiante.nota)
console.log(`Solo notas:`, notasEstudiantes)

const mensajes = estudiantes.map((estudiante) => {
  return `${estudiante.nombre} tiene ${estudiante.edad} años`
})

mensajes.forEach((mensaje) => console.log(mensaje))

// EJERCICIO 6: Usar FILTER para Filtrar

const notables = estudiantes.filter((estudiante) => estudiante.nota >= 9)
console.log(notables)

const mayoresDe22 = estudiantes.filter((estudiante) => estudiante.edad > 22)
console.log(mayoresDe22)

const nombresMayoresDe22 = mayoresDe22.map((estudiante) => estudiante.nombre)

console.log(nombresMayoresDe22)

// EJERCICIO 7: DOM - Mostrar Productos con innerHTML y Map

const productos = [
  {
    id: 1,
    nombre: "Portátil HP",
    precio: 899,
    categoria: "Electrónica",
    stock: 15,
  },
  {
    id: 2,
    nombre: "Ratón Logitech",
    precio: 25,
    categoria: "Accesorios",
    stock: 50,
  },
  {
    id: 3,
    nombre: "Teclado Mecánico",
    precio: 120,
    categoria: "Accesorios",
    stock: 30,
  },
  {
    id: 4,
    nombre: "Monitor Samsung",
    precio: 320,
    categoria: "Electrónica",
    stock: 8,
  },
  {
    id: 5,
    nombre: "Webcam HD",
    precio: 65,
    categoria: "Accesorios",
    stock: 22,
  },
]

const contenedorProductos = document.getElementById("productos")

const htmlProductos = productos.map((producto) => {
  return `
  <div class="producto-card"> 
    <h3>${producto.nombre}</h3>
    <p class="categoria">${producto.categoria}</p>
    <p class="precio">${producto.precio}</p>
    <p class="stock">Stock: ${producto.stock} unidades</p>
  </div>
  `
})

contenedorProductos.innerHTML = htmlProductos.join("")

// let carta = "soy una carta"

// function leerCartas() {
//   let carta = "soy una carta dentro de la función"
//   console.log(carta)
// }

// leerCartas(carta)
