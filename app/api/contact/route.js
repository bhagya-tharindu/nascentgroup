export async function POST(request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log("Received:", { name, email, message });

  return new Response(JSON.stringify({ message: "Success" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
