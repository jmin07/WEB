import AddTable from "./AddTable";

export default function TraceTable() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      {arr.map((item, idx) => (
        <>
          <AddTable key={idx}>{item}</AddTable>
        </>
      ))}
    </>
  );
}
