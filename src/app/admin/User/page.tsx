import axios from "axios";
import { User, columns } from "./(components)/coloumn";
import { DataTable } from "./(components)/data-table";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  const data = await axios.get("http://localhost:3000/api/user");
  const result = data.data;
  return result;
}

export default async function page() {
  const data = await getData();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
