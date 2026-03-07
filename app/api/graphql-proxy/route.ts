const GRAPHQL_URL = "https://api.linguahub.net/graphql";
//       POST HANDLER
export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
      credentials: "include",
    headers: {
      "Content-Type": "application/json",
        "Authorization": req.headers.get("Authorization") || "",
         "Access-Control-Allow-Credentials": "true",
         "Cookie": req.headers.get("cookie") || "",
    },
    body: JSON.stringify(body),
  });

  const data = await res.text();
  return new Response(data, { status: res.status, 
    headers: {
      "Content-Type": "application/json",
    } });
}


//       GET HANDLER
export async function GET(req: Request) {
  const url = new URL(req.url);

  // Forward full query string to the GraphQL API
  const targetUrl = GRAPHQL_URL + "?" + url.searchParams.toString();

  const res = await fetch(targetUrl, {
    method: "GET",
      credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Authorization": req.headers.get("Authorization") || ""
    },
  });

  const data = await res.text();
  return new Response(data, { status: res.status });
}
