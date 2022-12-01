import { useRouter } from "next/router";

function ClientsPage() {
  const { query, push } = useRouter();
  console.log("ClientsPage", query);
  function gotonextrouter() {
    // load data ...
    push(`/clients/${query.id}/test`);
  }
  function gotonextrouter2() {
    // load data ...
    push({
      pathname: "/clients/[id]/[clientid]",
      query: {
        id: query.id,
        clientid: "test2",
      },
    });
  }
  return (
    <>
      <div>ClientsPage</div>
      <div>这是第一层动态路由</div>
      <button onClick={gotonextrouter}>go to next router</button>
      <br />
      <button onClick={gotonextrouter2}>go to next router2</button>
    </>
  );
}

export default ClientsPage;
