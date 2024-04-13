// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivo leidos

// combino los primeros dos arrays

// combino los cuatro arrays

import { leerArchivoComoString, escribirTextoEnArchivo } from './src/utils/fileUtils.js'
import { transformarArrayDeNumerosAUnSoloString , transformarStringEnArrayDeNumeros  } from './src/utils/transformUtils.js'
import { combinarDosArrays, combinarNArrays } from './src/apareo.js'

let setA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
let setB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in')
let setImpar = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in')
let setPar = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in')

setA = transformarStringEnArrayDeNumeros(setA, ',')
setB = transformarStringEnArrayDeNumeros(setB, ',')
setImpar = transformarStringEnArrayDeNumeros(setImpar, ',')
setPar = transformarStringEnArrayDeNumeros(setPar, ',')

let solucion1 = transformarArrayDeNumerosAUnSoloString(combinarDosArrays(setA, setB))
let solucion2 = transformarArrayDeNumerosAUnSoloString(combinarNArrays([setA,setB,setImpar,setPar]))

escribirTextoEnArchivo('./out/combinados.out', solucion1, true)
escribirTextoEnArchivo('./out/combinado2s.out', solucion2, true)

console.log(solucion2)


