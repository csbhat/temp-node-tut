const { readFileSync, writeFileSync } = require("fs")
const { Server } = require("http")


console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/first.txt', 'utf8')


console.log(first, second)

writeFileSync(
  './content/result-sync.txt',
  `Here's the result:\n${first}${second}`, { flag: 'a' }
)

const result = readFileSync("./content/result-sync.txt", "utf8")
console.log(result)

console.log('starting with he next task')


