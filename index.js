let data = require('@begin/data')
let begin = require('@architect/functions') 

exports.handler = async function http(req) {
  
  let session = await begin.http.session.read(req)
  
  let account = await data.get({
    table: 'accounts',
    key: session.accountID
  })

  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: {
      status: "good",
      thing: `Hello ${account.name}!`,
      num: 1
    }
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
