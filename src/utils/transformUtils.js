/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    let strAux = []
    str = str.split(separador)
    for(let e of str){
        if(!isNaN(e)){
           strAux.push(parseInt(e))
        }
    }
    return strAux
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    let strAux = arr.join(separador)
    return strAux
}

export{ transformarArrayDeNumerosAUnSoloString, transformarStringEnArrayDeNumeros}
// exportar ambas funciones