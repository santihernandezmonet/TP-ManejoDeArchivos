import fs from 'fs'
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    if(typeof ruta != 'string'){
        throw new Error("Formato invalido")
    }
    try {
        return fs.readFileSync(ruta, 'utf-8')
    } catch (error) {
        console.log(`Error en lectura sincrónica: ${error.message}`)
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    if(typeof ruta != 'string') {
        throw new Error('Error: formato invalido')
    } else {
        if(shouldCreateIfNotExists){
            fs.writeFileSync(ruta,texto)
        } else{
            throw new Error('el archivo no existe');
        }
    }
}

export {leerArchivoComoString,
        escribirTextoEnArchivo}