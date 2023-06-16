import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import cors from 'cors'

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//OCORRÊNCIAS
let ocorrencias
if (!JSON.parse(localStorage.getItem('ocorrencias'))){
  ocorrencias = [{
    idOcorrencia: 0,
    nomeOcorrencia: "Fuga de Água",
    descriçaoOcorrencia: "Fuga de água num dos lavatórios da cantina). Água constantemente a cair.",
    localOcorrencia: "Cantina da ESMAD",
    dataHoraOcorrencia: "24-1-2023",
    idUser: 1,
    fotoOcorrencia:"/src/assets/img/imagemAtividade.png",
    pontosOcorrencias: 0, 
    categoriaOcorrencia: "",
    statusOcorrencia: false,
  },
  {
    idOcorrencia: 1,
    nomeOcorrencia: "Vidro Partido",
    descriçaoOcorrencia: "Vidro Partido no chao",
    localOcorrencia: "B205",
    dataHoraOcorrencia: "24-3-2023",
    idUser: 1,
    fotoOcorrencia:"/src/assets/img/imagemAtividade.png",
    pontosOcorrencias: 0, 
    categoriaOcorrencia: "",
    statusOcorrencia: false,
  }
  ]
  console.log(ocorrencias);
  localStorage.setItem('ocorrencias', JSON.stringify(ocorrencias))
}else{
  ocorrencias = JSON.parse(localStorage.getItem('ocorrencias'))
}

export const Ocorrencia = defineStore('ocorrencia',{
  state: () => ({   
    /* ocorrencias: ocorrencias */
  }),

  getters:{
    /* Ocorrências */ 
    //Nome da Ocorrência
    //getNomeOcorrencias: (state) =>
    //(nomeOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.nomeOcorrencia == nomeOcorrencia),

    //Descrição da Ocorrência
    //getDescOcorrencias: (state) =>
    //(descriçaoOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.descriçaoOcorrencia == descriçaoOcorrencia),

    //Estado da Ocorrência
    //getStatusOcorrencia: (state) =>
    //(statusOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.statusOcorrencia == statusOcorrencia),

    //Data da Ocorrência
    //getDataHoraOcorrencia: (state) =>
    //(dataHoraOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.dataHoraOcorrencia == dataHoraOcorrencia),

    //Local da Ocorrência
    //getLocalOcorrencia: (state) =>
    //(localOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.localOcorrencia == localOcorrencia),

    //Local da Ocorrência
    //getUserOcorrencia: (state) =>
    //(idUser) => state.ocorrencias.filter(ocorrencia => ocorrencia.idUser == idUser),

    //Foto da Ocorrência
    //getFotoOcorrencia: (state) =>
    //(fotoOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.fotoOcorrencia == fotoOcorrencia),

    //Foto da Ocorrência
    //getPontosOcorrencia: (state) =>
    //(pontosOcorrencias) => state.ocorrencias.filter(ocorrencia => ocorrencia.pontosOcorrencias == pontosOcorrencias),

    //Categoria da Ocorrência
    //getCategoriaOcorrência: (state) =>
    //(categoriaOcorrencia) => state.ocorrencias.filter(ocorrencia => ocorrencia.categoriaOcorrencia == categoriaOcorrencia),

    //Get Todas as Ocorrencias
    async getOcorrencias(){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
      }
      try{
        const response = await axios.get('https://elegant-slug-woolens.cyclic.app/occurrences',{headers:headers});
        const responseData = response.data
        console.log(responseData)
        return responseData
      }catch(error){
        return false
      }
  
    },
    async getOcorrenciaById(id){
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
      }
      try{
        const response = await axios.get('https://elegant-slug-woolens.cyclic.app/occurrences/' +id,{headers:headers});
        const responseData = response.data
        console.log(responseData)
        return responseData
      }catch(error){
        return false
      }
  
    },
    
    //(state) => state.ocorrencias,
    
    //Get Ocorrencia por id
    //getOcorrenciaById: (state) => (id) => state.ocorrencias.find(ocorrencia => ocorrencia.idOcorrencia = id),
    
    //Get Ocorrencia por user
    //getOcorrenciaByUser: (state) => (idUser) => state.ocorrencias.find(ocorrencia => ocorrencia.idUser = idUser)
    
  },

  actions: {
  /*   addOcorrencia(nome,desc,local,idUser,foto,categoria){
        this.ocorrencias.push({
            idOcorrencia: this.ocorrencias[this.ocorrencias.length - 1].idOcorrencia +   1 ,
            nomeOcorrencia: nome,
            descriçaoOcorrencia: desc,
            localOcorrencia: local,
            dataHoraOcorrencia: new Date().toString().split(' '),
            idUser:idUser, 
            fotoOcorrencia: foto,
            pontosOcorrencias: 0,
            categoriaOcorrencia: categoria,
            statusOcorrencia: false,
          })
          localStorage.setItem('ocorrencias',JSON.stringify(this.ocorrencias))
        },
        
    ChangeOcorrenciaStatus(id){

      let ocorrencia = this.ocorrencias.find(ocorrencia => ocorrencia.idOcorrencia == id)

      ocorrencia.statusOcorrencia = !ocorrencia.statusOcorrencia

      localStorage.setItem('ocorrencias',JSON.stringify(this.ocorrencias))
    }
 */
  //BACKEND
  

  

  async addOcorrencia(nomeOcorrencia,descricaoOcorrencia,localOcorrencia,fotoOcorrencia,categoriaOcorrencia){
    const data ={
      nomeOcorrencia: nomeOcorrencia,
      descricaoOcorrencia: descricaoOcorrencia,
      localOcorrencia: localOcorrencia,
      dataOcorrencia: new Date(),
      idUser:"",
      fotoOcorrencia: fotoOcorrencia,
      pontosOcorrencia:10,
      categoriaOcorrencia: categoriaOcorrencia,
      statusOcorrencia:false
    
    }
    
    const headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    }
    try{
     const formData = new FormData()
     formData.append("fotoOcorrencia", fotoOcorrencia)
     formData.append("nomeOcorrencia", nomeOcorrencia)
     formData.append("descricaoOcorrencia", descricaoOcorrencia)
     formData.append("localOcorrencia", localOcorrencia)
     formData.append("dataOcorrencia", new Date())
     formData.append("idUser", "")
     formData.append("pontosOcorrencia", 10)
     formData.append("categoriaOcorrencia", categoriaOcorrencia)
     formData.append("statusOcorrencia", false)
      console.log(data)
      const response = await axios.post('https://elegant-slug-woolens.cyclic.app/occurrences',formData,{headers:headers});
      this.responseData = response.data
      console.log(response.data);
      return true
    }catch(error){
      console.log(error);
      return false
    }

  },

  async ChangeOcorrenciaStatus(id){
      const data={
        statusOcorrencia:true
      }
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
      }
      try{
        const response = await axios.put(`https://elegant-slug-woolens.cyclic.app/occurrences/${id}`,data,{headers:headers});
        console.log(response)
        this.responseData = response.data
        return true
      }catch(error){
        return false
      }
  },

  async deleteOccorrencia(id){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    }

    try{
      const response = await axios.delete(`https://elegant-slug-woolens.cyclic.app/occurrences/${id}`,{headers:headers});
      this.responseData = response.data
      return true
    }catch(error){
      return false
    }
  }
  }})
