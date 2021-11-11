let begin = require("@architect/functions");
let data = require("@begin/data");

async function createIfNotExist(table) {
  console.log("creating if not existing...", table);
  const t = await data.get({ table });
  if (t) {
    console.log(`table '${table}' exists!`, t);
  } else {
    await data.set([{ table, key: "Matthew", verses: [""] }]);
  }
}

function canConnect(dbName) {
  return false;
}

async function handler(req) {
  let table = "greetings";
  let key = "Japanese";
  let greeting = `Kon'nichiwa`;

  createIfNotExist("bible");

  console.log("conn:", process.env.CONN);
  console.log("sesh:", JSON.stringify(req, null, 2));

  return {
    statusCode: 200,
    headers: { "content-type": "application/json; charset=utf8" },
    body: JSON.stringify({
      ok: true,
      stuff: `${table}-${key}-${greeting}`,
      connection: {
        redis: canConnect("redis"),
        fauna: canConnect("fauna"),
        cockroach: canConnect("cockroach"),
        mongo: canConnect("mongo"),
        begin: canConnect("begin"),
      },
    }),
  };
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
exports.handler = begin.http.async(handler);
