const fs = require('fs')

global.creator = 'Mrchllcloud' 
global.apikey = ["Mrchll", "Mrchllcloud", "Mrchllhost"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
