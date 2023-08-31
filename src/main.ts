import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTansacao.js";





async function handleData() {
  const data = await fetchData<TransacaoApi[]>('https://api.origamid.dev/json/transacoes.json?')

 if(!data) return
  const transacoes = data.map(normalizarTransacao)
  console.log(transacoes)
  
    preencherTabela(transacoes)
}


function preencherTabela(transacoes: TransacaoApi[]): void{
  const tabela = document.querySelector('#transacoes tbody')
  if(!tabela) return
  transacoes.forEach((item)=>{
    tabela.innerHTML += `
    
    <tr>
    <td>${transacoes.Nome}</td>
    </tr>`
    
    
  })

}



handleData()