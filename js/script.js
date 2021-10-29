class Contato{
    constructor(id,nome,telefone,email,data,tipo,quarto){
        this.id=id;
        this.nome=nome;
        this.telefone=telefone;
        this.email=email;
        this.data=data;
        this.tipo=tipo;
        this.quarto=quarto;
    }
}
//guardar clientes;

let contatos=[
    new Contato(0,"Mavis","13013-1313","mavisDracula@yahoo.com","1903-10-15","vampira","A-3")
];

//variável
let id=null;

//referenciar elementos;
const nome=document.querySelector("#nome")
const telefone=document.querySelector("#tel")
const email=document.querySelector("#email")
const data=document.querySelector("#data")
const tipo=document.querySelector("#tipo")
const quarto=document.querySelector("#room")
const lista=document.querySelector("#list")


data.min=new Date(-5208988800000).toISOString().slice(0,10)
data.max=new Date().toISOString().slice(0,10);


listar=()=>{
    lista.innerHTML=contatos
    .map((contato)=>{
        let li=`<li     class="itemLi"  id="contato-${contato.id}>"
         
        <div class="items">

        <span> <h1>${contato.nome}</h1></span>
       <div class="contentDetails">
            <h3>Telefone ${contato.telefone}  </h3>   
            <h4> Email- ${contato.email}  </h4>
            <h4> data de nascimento -${contato.data}  </h4>
            <h4> Monstro - ${contato.tipo}  </h4>
            <h4>Quarto - ${contato.quarto}  </h4>
       </div>
       <div class="contentButtons"> <button onClick="excluir(${contato.id})">  excluir</button>
             <button onClick="editar(${contato.id})">  Editar</button> </div>
         
        </div>
        
        `
        return li;
    })
}


function cadastrar(){
    const idContato = id !== null ? id : contatos.length;
    contatos[idContato] = new Contato(
    idContato,

    nome.value,
    telefone.value,
    email.value,
    data.value,
    tipo.value,
    quarto.value,
    
     
    )
    listar();
    limpar();
}


function limpar(){
    nome.value=""
    telefone.value=""
    email.value=""
    data.value=""
    tipo.value=""
    quarto.value=""
}

function excluir(idContato){
contatos.splice(idContato,1);
listar();
}



identificarContato = (idContato) => {
    return contatos.find((contato) => contato.id === idContato);
  };


editar = (idContato) => {
    contato = identificarContato(idContato);
    id = contato.id;
    nome.value = contato.nome;
    telefone.value=contato.telefone;
    email.value=contato.email;
    data.value=contato.data;
    tipo.value=contato.tipo;
    // quarto.value=contato.room
  };

  function submitForm(event){
    event.preventDefault();
    window.history.back();
  }