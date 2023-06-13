import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="h-screen w-screen font-montserrat flex flex-col justify-center items-center">
      <div className="text-white font-bold text-7xl cursor-default">
        WELCOME TO
      </div>
      <div className="flex gap-3 mt-5">
        <div className="text-red-600 text-3xl font-semibold cursor-default">
          ROCK
        </div>
        <div className="text-blue-300 text-3xl font-semibold cursor-default">
          PAPER
        </div>
        <div className="text-yellow-600 text-3xl font-semibold cursor-default">
          SCISSORS
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
