import { authOptions } from "@/lib/nextAuth"
import { getServerSession } from "next-auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  return Response.json({
    accessToken: (session as any).accessToken,
    user: session.user,
    roles: (session as any).roles,
  })
}
