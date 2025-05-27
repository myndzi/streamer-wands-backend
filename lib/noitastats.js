const htmlParser = require('htmlparser2')
const dom = htmlParser.DomUtils
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
        const decrypted = Buffer.from(buf).toString()
        const xml = htmlParser.parseDocument(decrypted, { xmlMode: true })
        const stats = dom.getElementsByTagName("E", xml)
            .map((x) => `["${dom.getAttributeValue(x, "key").replace('"', '\"')}"]=${dom.getAttributeValue(x, "value")}`)
        return `stats = {${stats.join(',\n')}}`
    })

module.exports = { convertNoitaStats }
