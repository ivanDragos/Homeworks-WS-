const fs = require("fs")

const megaCompanies = {
    id:"string",
    name:"string",
    category:"string",
    revenue:"number",
    worth:"number"
}

const footballTeams = {
    id:"string",
    name:"string",
    stadiumName:"string",
    fans:"number",
}


const footballPlayers = {
    id:"string",
    firstName:"string",
    lastName:"string",
    yearOfBirth:"number",
}


const videoGames = {
    id:"string",
    name:"string",
    category:"string",
    yearOfRelease:"number",
    copiesSold:"number"
}


const gameConsoles = {
    id:"string",
    name:"string",
    manufacturer:"string",
    yearOfRelease:"number",  
}

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


const addGameConsole = async (id, name, manufacturer, yearOfRelease) => {
    try {
        const console = {
            id, 
            name,
            manufacturer,
            yearOfRelease,
        }
        let data = await readData("./gameConsoles")
        data.push(console)
        await writeData(data, "./gameConsoles")
    } catch (err) {
        throw err
    }
}

// (async () => {
//     try {
//         await addGameConsole("1", "Playstation1", "SONY", 2000)
//         await addGameConsole("1", "Playstation2", "SONY", 2002)
//     } catch (err) {
//         console.error("Error:", err);
//     }
// })();

const getOneConsole = async (id) => {
    try {
        const data = await readData("./gameConsoles")
        const console = data.find((console) => console.id === id)
        return console;
    } catch (err) {
        throw err
    }
}

// (async () => {
//     try {
//         // await addGameConsole("2", "Playstation2", "SONY", 2002)
//         // const getConsole = await getOneConsole("1")
//         const getConsole = await getOneConsole("2")
//         console.log(getConsole)

//     } catch (err) {
//         console.error("Error:", err);
//     }
// })();


const deleteConsole = async (id) => {
    try {
        const data = await readData("./gameConsoles")
        const remove = data.filter((console) => console.id !== id)
        await writeData(remove, "./gameConsoles")
    } catch(err) {
        throw err
    }
}

(async () => {
    try {
        // await addGameConsole("8", "PSP", "SONY", 2005)
        // await addGameConsole("4", "Xbox S", "Microsoft", 2020)
        // await addGameConsole("5", "Playstation 5", "SONY", 2022)
       await deleteConsole("2")
       await deleteConsole("4")
    } catch (err) {
        console.error("Error:", err);
    }
})();

const addPlayers = async (id, firstName, lastName, yearOfBirth) => {
    try {
        const player = {
            id, 
            firstName,
            lastName,
            yearOfBirth,
        }
        let data = await readData("./footballPlayers")
        data.push(player)
        await writeData(data, "./footballPlayers")
    } catch (err) {
        throw err
    }
}

// (async () => {
//     try {
//         await addPlayers("1", "Ronaldo", "Cristiano", 1986)
       
//     } catch (err) {
//         console.error("Error:", err);
//     }
// })();


const addTeam = async (id, name, stadiumName, fans) => {
    try {
        const team = {
            id, 
            name,
            stadiumName,
            fans,
        }
        let data = await readData("./footballTeams")
        data.push(team)
        await writeData(data, "./footballTeams")
    } catch (err) {
        throw err
    }
}
// (async () => {
//     try {
//         await addTeam("1", "Real Madrid", "Santiago Bernabeu", 100000000)
       
//     } catch (err) {
//         console.error("Error:", err);
//     }
// })();
