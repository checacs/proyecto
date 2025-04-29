export interface Producto {
  tienda: string
  ubicacion: string
  especies: Especies[]
}

export interface Especies {
  nombre: string
  Precio: string
  Variedad: string
  Origen: string
  Altura: string
  imagen: string
  stock: boolean
}

