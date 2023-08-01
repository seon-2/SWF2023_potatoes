import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function page() {
  let session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
  }
}
