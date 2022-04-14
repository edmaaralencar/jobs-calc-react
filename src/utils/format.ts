export const formatCurrency = (amount: number) => {
  const options = { style: 'currency', currency: 'BRL' }
  return amount.toLocaleString('pt-BR', options)
}

export default formatCurrency
