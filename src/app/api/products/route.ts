import { NextResponse, NextRequest } from "next/server";
import Connection from "@/services/Database/Connection";
import { Products } from "@/services/Database/model/Products";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(Request: NextRequest) {
  noStore();
  Connection();
  const id = Request.nextUrl.searchParams.get("id");
  const category = Request.nextUrl.searchParams.get("category");
  const limit = Request.nextUrl.searchParams.get("limit") || 10;
  const search = Request.nextUrl.searchParams.get("search");
  const page = Request.nextUrl.searchParams.get("page") || 1;
  const skip = (Number(page) - 1) * Number(limit);

  try {
    if (id) {
      const product = await Products.findOne({ uuid: id })
        .skip(skip)
        .limit(Number(limit));
      return await NextResponse.json(product, { status: 200 });
    } else if (category) {
      const Allproducts = await Products.find({ category: category })
        .skip(skip)
        .limit(Number(limit));
      return await NextResponse.json(
        { result: Allproducts, totalProducts: Allproducts.length, page: page },
        { status: 200 }
      );
    } else if (search) {
      const Allproducts = await Products.findOne({ name: search })
        .skip(skip)
        .limit(Number(limit));
      return await NextResponse.json(
        { result: Allproducts, totalProducts: Allproducts.length, page: page },
        { status: 200 }
      );
    } else {
      const Allproducts = await Products.find({})
      return await NextResponse.json(
        { result: Allproducts, totalProducts: Allproducts.length, page: page },
        { status: 200 }
      );
    }
  } catch (error) {
    return await NextResponse.json(error, { status: 500 });
  }
}

export async function POST(Request: NextRequest) {
  noStore();
  Connection();
  const body = await Request.json();
  try {
    const product = await Products.create(body);
    return await NextResponse.json(product, { status: 201 });
  } catch (error) {
    return await NextResponse.json(error, { status: 500 });
  }
}

export async function PATCH(Request: NextRequest) {
  noStore();
  Connection();
  const body = await Request.json();
  const id = Request.nextUrl.searchParams.get("id");
  try {
    const product = await Products.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    return await NextResponse.json(product, { status: 200 });
  } catch (error) {
    return await NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(Request: NextRequest) {
  noStore();
  Connection();
  const id = Request.nextUrl.searchParams.get("id");
  try {
    const product = await Products.findOneAndDelete({ uuid: id });
    return await NextResponse.json(product, { status: 200 });
  } catch (error) {
    return await NextResponse.json(error, { status: 500 });
  }
}
