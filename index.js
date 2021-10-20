let data = require('@begin/data')
let begin = require('@architect/functions')

exports.handler = async function http(req) {

  let table = 'greetings'
  let key = 'Japanese'
  let greeting = `Kon'nichiwa`

  try {
    await data.set({ table, key, greeting })

    let doc = await data.get({ table, key })

    console.log('doc', doc)
  } catch (error) {
    console.error(error)
  }

  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: JSON.stringify({ thing: `Hello ${table}!` })
  }
}

/* Respond with successful resource creation, CORS enabled
let arc = require('@architect/functions')
exports.handler = arc.http.async (http)
async function http (req) {
  return {
    statusCode: 201,
    json: { ok: true },
    cors: true,
  }
}
*/
