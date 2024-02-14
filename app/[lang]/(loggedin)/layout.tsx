
import { checkUser } from "./actions"

export default  async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>){

  checkUser();

return (
<div>
asdasdasd {children}
</div>
  );

}
