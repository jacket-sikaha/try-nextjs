import { useRouter } from "next/router";

function ClientsPage() {
  const { query } = useRouter();
  console.log("ClientsPage", query);
  return (
    <>
      <div>ClientsPage</div>
      <div>这是第一层动态路由</div>
    </>
  );
}

export default ClientsPage;
