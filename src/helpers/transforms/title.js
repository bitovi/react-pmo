export default function toTitle(input) {
  return input
    .replace(/([A-Z])/g, ' $1')
    .replace(/([^\W_]+[^\s-]*) */g, (input) => input[0].toUpperCase() + input.slice(1).toLowerCase())
}
