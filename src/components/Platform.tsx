const Platform = ({ name }: { name: string }) => {
  const styles = {
    ps: "font-bold text-sm w-[150px] text-gray-900 border-blue-800 border-2 p-2 mx-1 my-1 bg-blue-500 rounded-lg",
    xbox: "font-bold text-sm w-[150px] text-gray-900 border-green-800 border-2 p-2 mx-1 my-1 bg-green-500 rounded-lg",
    other:
      "font-bold text-sm w-[150px] text-gray-900 border-gray-800 border-2 p-2 mx-1 my-1 bg-gray-400 rounded-lg",
  };

  let consoleStyle = styles.other;

  switch (name) {
    case "Xbox One":
    case "Xbox 360":
    case "Xbox":
    case "Xbox Series S/X":
      consoleStyle = styles.xbox;
      break;
    case "PlayStation 2":
    case "PlayStation 3":
    case "PlayStation 4":
    case "PlayStation 5":
    case "PlayStation 1":
    case "PSP":
    case "PS Vita":
      consoleStyle = styles.ps;
      break;
    default:
      break;
  }

  return (
    <>
      <span className={consoleStyle}>{name}</span>
    </>
  );
};

export default Platform;
