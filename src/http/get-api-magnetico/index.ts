import { APIGatewayProxyEvent, Context } from "https://deno.land/x/lambda/mod.ts";

const headers = {
      //'content-type': 'text/html; charset=utf8',
	    cors: true,
	          'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }

// export async function handler (req: Req) {
export async function handler (req: APIGatewayProxyEvent, context: Context) {
  try {
    const q = req.queryStringParameters!.query || 'inception'
    const url = `https://magnetico.kescher.at/api/v0.1/torrents?query=${q}`
    const body = await (await fetch(url)).text()
    return {
    headers,
    body
    }
  } catch (e) {
	console.log(e)
    return {
    headers,
    body: JSON.stringify(e)
  }
  }
}

// Example responses

/* Forward requester to a new path
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/about',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
*/

/* Respond with successful resource creation
export async function handler (req: object) {
  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({ok: true})
  }
}
*/

/* Deliver client-side JS
export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/javascript; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'console.log("Hello world!")',
  }
}
*/
