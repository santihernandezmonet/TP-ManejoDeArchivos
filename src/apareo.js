import { transformarStringEnArrayDeNumeros } from "./utils/transformUtils.js"
/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    return Array.from(new Set(arrA.concat(arrB).sort((arrA, arrB) => arrA - arrB)))
  }

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
   let aux = Array.from(new Set(arrs.flat()))
   aux.sort((a,b) => {
    return a - b
   })
   
   return aux
}

export {combinarDosArrays, combinarNArrays}