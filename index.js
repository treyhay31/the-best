let data = require('@begin/data')
let begin = require('@architect/functions') 

exports.handler = async function http(req) {
  
  let table = 'greetings'
  let key = 'Japanese'
  let greeting = `Kon'nichiwa`

  await data.set({table, key, greeting})

  let doc = await data.get({table, key})
  
  console.log('doc', doc)
  
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body:  `Hello ${table}!`
  }
}


// Reads & writes session data

exports.handler = async function http(request) {
  
}
// Other example responses

/* Forward requester to a new path
exports.handler = async function http (req) {
  return {
    statusCode: 302,
    headers: {'location': '/about'}
  }
}
*/

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
