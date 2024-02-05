import { NextRequest, NextResponse } from "next/server";
import Connection from "@/services/Database/Connection";
import { Users } from "@/services/Database/model/Users";
import { unstable_noStore as noStore } from "next/cache";
import bcrypt from "bcrypt";

export async function GET(Request: NextRequest) {
  noStore();
  Connection();
  let email = Request.nextUrl.searchParams.get("email");
  let information = Request.nextUrl.searchParams.get("info");
  let order = Request.nextUrl.searchParams.get("order");
  try {
    if (email && information == "yes" && order == "yes") {
      let user = await Users.findOne({ email: email }).populate(
        "Information Orders"
      );
      return await NextResponse.json(user, { status: 200 });
    } else if (email && information === "yes") {
      let user = await Users.findOne({ email: email }).populate("Information");
      return await NextResponse.json(user, { status: 200 });
    } else if (email && order === "yes") {
      let user = await Users.findOne({ email: email }).populate("Orders");
      return await NextResponse.json(user, { status: 200 });
    } else {
      const user = await Users.find({});
      return await NextResponse.json(user, { status: 200 });
    }
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}

export async function POST(Request: NextRequest) {
  noStore();
  Connection();
  const body = await Request.json();
  try {
    const saltRounds = 20;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(body.password, salt);
    const response = await Users.create({
      ...body,
      password: hash,
    });
    return await NextResponse.json(response, { status: 201 });
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}

export async function DELETE(Request: NextRequest) {
  noStore();
  Connection();
  const id = Request.nextUrl.searchParams.get("id");
  try {
    const response = await Users.findOneAndDelete({ uuid: id });
    return await NextResponse.json(
      {
        message: `${response.email} User Deleted`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return await NextResponse.json(error.message, { status: 500 });
  }
}
