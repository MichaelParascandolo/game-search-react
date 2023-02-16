const Platform = ({ name }: { name: string }) => {
  const styles = {
    ps: "font-bold text-sm w-[150px] text-gray-900 border-blue-800 border-2 p-2 mx-1 my-1 bg-blue-500 rounded-lg",
    xbox: "font-bold text-sm w-[150px] text-gray-900 border-green-800 border-2 p-2 mx-1 my-1 bg-green-500 rounded-lg",
    other:
      "font-bold text-sm w-[150px] text-gray-900 border-gray-800 border-2 p-2 mx-1 my-1 bg-gray-400 rounded-lg",
  };
  return (
    <>
      <span
        className={
          name === "Xbox One"
            ? styles.xbox
            : name === "Xbox 360"
            ? styles.xbox
            : name === "Xbox"
            ? styles.xbox
            : name === "Xbox Series S/X"
            ? styles.xbox
            : name === "PlayStation 2"
            ? styles.ps
            : name === "PlayStation 3"
            ? styles.ps
            : name === "PlayStation 4"
            ? styles.ps
            : name === "PlayStation 5"
            ? styles.ps
            : name === "PlayStation 1"
            ? styles.ps
            : name === "PSP"
            ? styles.ps
            : name === "PS Vita"
            ? styles.ps
            : styles.other
        }
      >
        {name}
      </span>
    </>
  );
};

export default Platform;
