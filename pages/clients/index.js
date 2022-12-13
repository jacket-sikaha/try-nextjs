import Link from "next/link";
function Clients() {
  // link跳转
  // 批量生成多个link
  const clientsarr = [
    { id: "max", name: "qwe" },
    { id: "asd", name: "1235" },
  ];
  const clientsarr2 = [
    { id: "mas", name: "qwe32q" },
    { id: "aqw", name: "12ww35" },
  ];
  return (
    <>
      <div>Clients 两层以上的嵌套+动态路由写法</div>
      <ul>
        <li>
          <Link href="/clients/amy">amy</Link>
        </li>
        <li>
          <Link href="/clients/lee">lee</Link>
        </li>
        {clientsarr.map(({ id, name }, index) => (
          <li key={id}>
            <Link href={`/clients/${name}`}>
              模版字符串写法，{name}
              {index}
            </Link>
          </li>
        ))}

        {/* href的第二种写法 */}
        {clientsarr2.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id },
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Clients;
