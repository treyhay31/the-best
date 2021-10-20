exports.handler = async function http(req) {

  let table = 'greetings'
  let key = 'Japanese'
  let greeting = `Kon'nichiwa`

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json; charset=utf8' },
    body: JSON.stringify({ ok: true, stuff: `${table}-${key}-${greeting}` }),
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
