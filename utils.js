export function saudacao(nome = 'Visitante') {
  console.log(`Olá, ${nome}`);
}

export const dobro = n => n * 2;

export function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export function validarEmail(email) {
    return email.includes("@") && email.includes(".")
}

export function obterDataFormatada() {
    const hoje = new Date()
    console.log(hoje.toLocaleDateString('pt-BR'));
}