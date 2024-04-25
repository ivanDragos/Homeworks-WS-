const fs = require('fs')


const readData = (source) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${source}.json`, "utf-8", (err, data) => {
            if(err) return reject(err)
            const out = JSON.parse(data)
            return resolve(out)
        })
    })
}

const writeData = (data, destination) => {
    return new Promise((resolve, reject) => {
        const out = JSON.stringify(data)
        fs.writeFile(`${destination}.json`, out, (err) => {
            if (err) return reject(err)
            return resolve()
        })
    })
}



module.exports = {
    readData,
    writeData
}