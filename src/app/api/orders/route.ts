import { NextRequest, NextResponse } from "next/server";
import Connection from "@/services/Database/Connection";
import { Order } from "@/services/Database/model/Orders";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(Request: NextRequest) {
  try {
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}
export async function POST(Request: NextRequest) {
  try {
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}
export async function DELETE(Request: NextRequest) {
  try {
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}
