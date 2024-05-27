import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const apiKey = process.env.WEBFLOW_API_KEY

  try {
    const response = await axios.get(
      "https://api.webflow.com/v2/collections/66504059267b8c912163c50d/items",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    return NextResponse.json(response.data)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "An error occurred while fetching data." },
      { status: 500 }
    )
  }
}
