const decryptNoitaStats = (() => {
    const statsValues = {
        key: Buffer.from('536563726574734f66546865416c6c53', 'hex'),
        iv: Buffer.from('54687265654579657341726557617463', 'hex'),
    }

    const key = crypto.subtle.importKey('raw', statsValues.key, 'AES-CTR', false, [
        'encrypt',
        'decrypt',
    ])

    return (data) =>
        key.then((key_encoded) =>
            crypto.subtle.decrypt(
                {
                    name: 'AES-CTR',
                    counter: statsValues.iv,
                    length: 128,
                },
                key_encoded,
                data,
            ),
        )
})()

const convertNoitaStats = (encrypted) =>
    decryptNoitaStats(encrypted).then((buf) => {
        // const decrypted = Buffer.from(buf).toString()
        // const parser = new DOMParser()
        // const xml = parser.parseFromString(decrypted, "text/xml")
        // const stats = xml.getElementsByTagName("E")
        //     .map((x) => `["${x.getAttribute("key")}"]=${x.getAttribute("value")}`)
        // return `stats = {${stats.join(',')}}`
        const vals = Buffer.from(buf)
            .toString()
            .match(/<E.+>/g)
            .map((line) => line.match(/"([^"]+)" value="(\d+)"/))
            .map((kv) => `["${kv[1]}"]=${kv[2]}`)
        return `stats = {${vals.join(',')}}`
    })

module.exports = { convertNoitaStats }
