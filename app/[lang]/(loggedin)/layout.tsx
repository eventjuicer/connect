
import { checkUser } from "@/app/actions"

export default  async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>){

await checkUser();

return children;

}
