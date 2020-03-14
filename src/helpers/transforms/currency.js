export default function toCurrency(input) {
  return `$${input.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`
}
