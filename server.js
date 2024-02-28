const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.listen(4000, () => console.log(`Take us to warp 4000!`))