import Close from "../assets/icon-close.svg";
import Rules from "../assets/image-rules.svg";
import Logo from "../assets/logo.svg";
import Rock from "../assets/icon-rock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Triangle from "../assets/bg-triangle.svg";
import { useState } from "react";

function Classic() {
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(null);
  const [random, setRandom] = useState(null);

  const getRandomChoice = () => {
    const choices = [11, 12, 13];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setRandom(choices[randomIndex]);
  };

  return (
    <div className="font-montserrat h-screen w-screen ">
      <div className="h-full w-full z-0 flex flex-col justify-center items-center">
        <div className="fixed top-10 w-[50%] h-[20%] flex items-center justify-between border-2 border-[#ffffff50] rounded-xl px-5 py-2">
          <img src={Logo} alt="" className="h-[80%] object-contain" />
          <div className="h-[100%] w-[20%] bg-white rounded-lg flex flex-col p-3 justify-center items-center">
            <span className="text-sm text-blue-500 font-semibold">SCORE</span>
            <span className="text-gray-700 font-extrabold text-5xl">
              {score}
            </span>
          </div>
        </div>
        <div className="w-auto relative  h-auto mt-36 flex justify-center items-center">
          {!choice && (
            <div className="w-auto">
              <div
                className="absolute top-[-40px] hover:bg-gray-300 cursor-pointer left-[-40px] hover:ring-[25px] hover:ring-[#ffffff20] border-blue-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full"
                onClick={() => {
                  setChoice(11);
                  getRandomChoice();
                }}
              >
                <img src={Paper} alt="" />
              </div>
              <div
                className="absolute top-[-40px] hover:bg-gray-300 cursor-pointer right-[-40px] hover:ring-[25px] hover:ring-[#ffffff20] border-yellow-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full"
                onClick={() => {
                  setChoice(12);
                  getRandomChoice();
                }}
              >
                <img src={Scissors} alt="" />
              </div>
              <div
                className="absolute bottom-[-40px] hover:bg-gray-300 cursor-pointer left-[90px] hover:ring-[25px] hover:ring-[#ffffff20] border-red-600 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full"
                onClick={() => {
                  setChoice(13);
                  getRandomChoice();
                }}
              >
                <img src={Rock} alt="" />
              </div>
              <img src={Triangle} alt="" />
            </div>
          )}
          {choice && (
            <div className="flex gap-10 w-[50rem] justify-evenly">
              <div className="flex flex-col items-center gap-5">
                <div className="w-full text-center">YOU PICKED</div>
                {choice === 11 && (
                  <div className="hover:bg-gray-300  cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-blue-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Paper} alt="" />
                  </div>
                )}
                {choice === 12 && (
                  <div className="hover:bg-gray-300 cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-yellow-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Scissors} alt="" />
                  </div>
                )}
                {choice === 13 && (
                  <div className="hover:bg-gray-300 cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-red-600 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Rock} alt="" />
                  </div>
                )}
              </div>
              <div className="flex flex-col w-auto">
                {random === 11 && (
                  <div>
                    {choice === 12 && (
                      <div className="text-3xl text-center font-bold text-white">
                        YOU WIN
                      </div>
                    )}
                    {choice === 13 && (
                      <div className="text-3xl text-center font-bold text-red-600">
                        YOU LOSE
                      </div>
                    )}
                    {choice === 11 && (
                      <div className="text-3xl text-center font-bold text-gray-700">
                        DRAW
                      </div>
                    )}
                    <div
                      className="bg-white text-center px-2 py-3 mt-6 rounded-lg text-blue-600 hover:text-red-600 hover:cursor-pointer"
                      onClick={() => {
                        setChoice(null);
                        setRandom(null);
                      }}
                    >
                      PLAY AGAIN
                    </div>
                  </div>
                )}
                {random === 12 && (
                  <div>
                    {choice === 13 && (
                      <div className="text-3xl text-center font-bold text-white">
                        YOU WIN
                      </div>
                    )}
                    {choice === 11 && (
                      <div className="text-3xl text-center font-bold text-red-600">
                        YOU LOSE
                      </div>
                    )}
                    {choice === 12 && (
                      <div className="text-3xl text-center font-bold text-gray-700">
                        DRAW
                      </div>
                    )}
                    <div
                      className="bg-white text-center px-2 py-3 mt-6 rounded-lg text-blue-600 hover:text-red-600 hover:cursor-pointer"
                      onClick={() => {
                        setChoice(null);
                        setRandom(null);
                      }}
                    >
                      PLAY AGAIN
                    </div>
                  </div>
                )}
                {random === 13 && (
                  <div>
                    {choice === 11 && (
                      <div className="text-3xl text-center font-bold text-white">
                        YOU WIN
                      </div>
                    )}
                    {choice === 12 && (
                      <div className="text-3xl text-center font-bold text-red-600">
                        YOU LOSE
                      </div>
                    )}
                    {choice === 13 && (
                      <div className="text-3xl text-center font-bold text-gray-700">
                        DRAW
                      </div>
                    )}
                    <div
                      className="bg-white text-center px-2 py-3 mt-6 rounded-lg text-blue-600 hover:text-red-600 hover:cursor-pointer"
                      onClick={() => {
                        setChoice(null);
                        setRandom(null);
                      }}
                    >
                      PLAY AGAIN
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="w-full text-center">THE HOUSE PICKED</div>
                {random === 11 && (
                  <div className="hover:bg-gray-300 cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-blue-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Paper} alt="" />
                  </div>
                )}
                {random === 12 && (
                  <div className="hover:bg-gray-300 cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-yellow-500 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Scissors} alt="" />
                  </div>
                )}
                {random === 13 && (
                  <div className="hover:bg-gray-300 cursor-pointer hover:ring-[25px] hover:ring-[#ffffff20] border-red-600 border-[12px] bg-white h-[8em] w-[8em] flex justify-center items-center p-3 rounded-full">
                    <img src={Rock} alt="" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className="fixed px-8 text-white bottom-10 right-10 bg-transparent border-2 rounded-xl border-white hover:border-white hover:bg-[#ffffff10] active:bottom-9"
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>
      {showRules && (
        <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen z-[10000] bg-[#00000030]">
          <div className="h-[21rem] w-[21rem] p-8 bg-white rounded-lg">
            <div className="flex justify-between">
              <div className="text-[#15193c] text-xl font-bold cursor-default">
                RULES
              </div>
              <img
                src={Close}
                alt=""
                className="h-[1.25rem] object-contain cursor-pointer rounded-full hover:ring-[#98989830] hover:bg-[#98989890] hover:ring-[0.5em]"
                onClick={() => setShowRules(false)}
              />
            </div>
            <img src={Rules} alt="" className="mt-5 " />
          </div>
        </div>
      )}
    </div>
  );
}

export default Classic;
