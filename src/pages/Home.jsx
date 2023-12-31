import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-screen font-montserrat flex flex-col justify-center items-center">
      <div className="text-white font-bold text-5xl md:text-7xl cursor-default">
        WELCOME TO
      </div>
      <div className="flex gap-3 mt-5">
        <div className="text-red-600 text-xl md:text-3xl font-semibold cursor-default">
          ROCK
        </div>
        <div className="text-blue-300 text-xl md:text-3xl font-semibold cursor-default">
          PAPER
        </div>
        <div className="text-yellow-600 text-xl md:text-3xl font-semibold cursor-default">
          SCISSORS
        </div>
      </div>
      <Link
        to={"/classic"}
        className="relative bg-transparent px-5 py-3 text-white border-white border-2 rounded-xl mt-10 hover:border-white hover:bg-[#ffffff10] active:ring-[0.75em] active:ring-[#ffffff10]"
      >
        Play Game
      </Link>
    </div>
  );
}

export default Home;
