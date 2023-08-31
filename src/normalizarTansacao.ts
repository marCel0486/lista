import moedaParaNumero from "./moedaParaNumero.js"
import stringToData from "./stringToData.js"

declare global {
    
type TransacaoPagamento = "Boleto" | "Cartão de Crédito"
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando Pagamento" | "Estonada"

 interface TransacaoApi {
  nome:string
  ID:number
  Data:string
  Email:string
  status:TransacaoStatus
  ['Valor (R$)']:string
  ['Cliente Novo']:number
  ['Forma de Pagamento']:TransacaoPagamento

}
}


interface Transacao {
    nome:string
    ID:number
    Data:Date
    Email:string
    status:TransacaoStatus
    email:string
    moeda:string
    valor: number | null
    pagamento: TransacaoPagamento
    novo: boolean
}


export default function normalizarTransacao(transacao: TransacaoApi): Transacao{

return {
    nome: transacao.nome,
    ID:transacao.ID,
    Data:stringToData(transacao.Data),
    status:transacao.status,
    email:transacao.Email,
    moeda:transacao["Valor (R$)"],
    valor: moedaParaNumero(transacao["Valor (R$)"]),
    pagamento: transacao["Forma de Pagamento"],
    novo: Boolean(transacao["Cliente Novo"]),
}
}