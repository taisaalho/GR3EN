import { defineStore } from 'pinia'

//------------------------------------------------------------------------------------------------
//TÍTULOS
let titulos
if (!JSON.parse(localStorage.getItem('titulos'))){
  titulos:[{
    idTitulo: 0,
    descTitulo: " ",
    dataHoraTitulo: " ",
    imagemTitulo: " ",
    idUser: [],
    pontosTitulo: 0,
  }]
  localStorage.setItem('titulos', JSON.stringify(titulos))
}else{
  titulos = JSON.parse(localStorage.getItem('titulos'))
}

export const Titulo = defineStore("titulo", {
  state: () => [{
    titulos: titulos
  }],
})