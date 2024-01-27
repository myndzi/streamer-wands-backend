const salaIn = document.getElementById("sala")
const luaOut = document.getElementById("stats")

salaIn.onchange = (e) => {
    const inFile = e.target.files[0]
    if (!inFile) return
    // console.log(inFile)
    const reader = new FileReader()
    reader.onload = (e) => {
        xcrypt(e.target.result, function (xcrypted_content) {
            const dec = new TextDecoder()
            const xml = dec.decode(xcrypted_content)
            const lines = xml.match(/<E.+>/g)
            sala = lines.map(line => {
                const kv = line.match(/"(\w+)" value="(\d+)"/)
                return `${kv[1]}=${kv[2]}`
            })
            const dl = document.createElement("a")
            dl.innerText = "stats.lua"
            dl.download = dl.innerText
            dl.href = URL.createObjectURL(new Blob([`stats = {${sala.join(",")}}`]))
            luaOut.append(dl)
        })
    }
    reader.readAsArrayBuffer(inFile)
}


function fromHexString(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

function xcrypt(data, pred) {
    const statsValues = {
        key: fromHexString("536563726574734f66546865416c6c53"),
        iv: fromHexString("54687265654579657341726557617463"),
    }

    crypto.subtle.importKey("raw", statsValues.key, 'AES-CTR', false, ["encrypt", "decrypt"])
        .then(key_encoded => {
            crypto.subtle.decrypt(
                {
                    name: "AES-CTR",
                    counter: statsValues.iv,
                    length: 128
                },
                key_encoded,
                data
            ).then(xcrypted_content => { pred(xcrypted_content) })
        });
}

// router.post('/', upload.single('sala'), [], (req, res) => {
//     if (req.file) {
//         // console.log('Uploaded: ', req.file)
//         xcrypt(req.file.buffer, function (xcrypted_content) {
//             const dec = new TextDecoder()
//             const xml = dec.decode(xcrypted_content)
//             const lines = xml.match(/<E.+>/g)
//             sala = lines.map(line => {
//                 const kv = line.match(/"(\w+)" value="(\d+)"/)
//                 return `${kv[1]}=${kv[2]}`
//             })
//         })
//     }
// }