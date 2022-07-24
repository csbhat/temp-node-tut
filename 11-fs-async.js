const { readFile, writeFile } = require("fs")
const { appendFile } = require("fs/promises")

console.log('start')

readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) throw err
  console.log(data)

  const first = data

  readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)

    const second = data

    writeFile('./content/result-async.txt', `Here's the new file:\n${first}, ${second}`, (err) => {
      if (err) throw err
      console.log('task accomplished')
    });

  })

});

console.log('starting with he next task')
