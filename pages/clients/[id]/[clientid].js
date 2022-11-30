import { useRouter } from "next/router";

function SelectClientsPage() {
  const { query } = useRouter();
  console.log("SelectClientsPage", query);
  return (
    <>
      <div>SelectClientsPage</div>
      <div>这是第2层动态路由</div>
    </>
  );
}

export default SelectClientsPage;
