var fs = require('fs')
var Remarkable = require('remarkable')
var md = new Remarkable()

var sourceFile = process.argv[2]

var head = `
  <html>
  <head>
    <title> ` + sourceFile + `</title>
    <link rel="stylesheet" href="vivify.css" />
  </head>
  <body>
`

var foot = `
    <script src="vivify.js"></script>
  </body>
  </html>
 `

fs.readFile(sourceFile, 'utf8', function (err, data) {
  if (err) throw err
  process.stdout.write(head)
  process.stdout.write(md.render(data))
  process.stdout.write(foot)
})
