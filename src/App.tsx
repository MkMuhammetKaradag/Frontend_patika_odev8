import Button from "./components/Button";
import { useAppSelector } from "./contex/hooks";

const App = () => {
  const score = useAppSelector((s) => s.app.score);
  return (
    //bg-custom-radial
    <div className="w-full  h-screen bg-gradient-to-r from-custom-bg-to-color via-custom-bg-via-color   items-center flex flex-col to-custom-bg-to-color">
      <div className="flex  items-center  max-h-36 w-1/3 p-6  mt-5  justify-between  border-2  rounded-lg border-gray-500 ">
        <div className="text-white font-bold text-4xl max-w-32  items-start flex flex-col leading-7">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
        <div className="w-28 h-28 flex justify-center  items-center rounded-xl bg-white text-3xl text-center ">
          <span>{score}</span>
        </div>
      </div>
      <div className="flex">
        <Button></Button>
      </div>
    </div>
  );
};

export default App;
