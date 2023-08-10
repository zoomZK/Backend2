import fs from 'fs'


fs.writeFileSync('./ejemplo.txt', "Hola, bienvenido")



if (fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido)

    fs.appendFileSync('./ejemplo.txt', "\nHola, bienvenido")


    fs.unlinkSync('./ejemplo.txt')
}



import { promises as fs } from 'fs'

const consultarTxt = async () => {
    await fs.writeFile('./ejemplo.txt', "Hasta pronto!")
    let resultado = await fs.readFile('./ejemplo.txt', 'utf-8')
    console.log(resultado)
    await fs.appendFile('./ejemplo.txt', "\n Hasta pronto!")
    await fs.unlink('./ejemplo.txt')
}

consultarTxt()