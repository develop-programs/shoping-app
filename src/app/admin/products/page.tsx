import axios from "axios";
import { Product, columns } from "./(components)/coloumn";
import { DataTable } from "./(components)/data-table";

async function getData(): Promise<Product[]> {
  const data = await axios.get("http://localhost:3000/api/products");
  const result = data.data.result;
  return result;
}

export default async function Products() {
  const data = await getData();
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
