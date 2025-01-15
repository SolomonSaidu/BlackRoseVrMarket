import React from "react";
import Header from "./component/header";
import darkShadow from "../public/Rectangle 69.png";
import dottedShape from "../public/bg dotted shapes.png";
import movie from "../public/movie-2-fill.svg";
import nurse from "../public/nurse-fill.svg";
import bitcoin from "../public/bit-coin-fill.svg";
import star from "../public/star.svg";
import webs from "../public/webs.png";
import SimImg from "../public/sim-img.png";
import game from "../public/game.svg";
import shop from "../public/shop.svg";
import music from "../public/music-playlist.svg";
import health from "../public/health.svg";
import bag from "../public/bag-happy.svg";
import Thumbnail1 from "../public/Thumbnail1.png";
import Thumbnail2 from "../public/Thumbnail2.png";
import Thumbnail3 from "../public/Thumbnail3.png";
import Thumbnail4 from "../public/Thumbnail4.png";
import smVrman from "../public/sm-vrman.png"
import logo from "../public/logo.png";
import socmed from "../public/socmed.svg";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: secTwo, inView: secTwoinView } = useInView({
    threshold: 0,
  });

  const { ref: secThree, inView: secThreeinView } = useInView({
    threshold: 1,
  });

  const { ref: secFive, inView: secFiveinView } = useInView({
    threshold: 0,
  });

  const { ref: subscribeBtn, inView: subscribeBtninView } = useInView({
    threshold: 0,
  });
  // console.log(secTwoinView);

  return (
    <div className="h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Home screen container */}
      <div className=" home-cont relative">
        <div className=" absolute bottom-0">
          <img src={darkShadow} alt="" />
        </div>
        {/* blur div */}
        <div className=" sm:w-1/2 p-4 sm:rounded-r-[50px]   text-white h-[550px] bg-slate-200/20 blur-div flex justify-center align-middle">
          {/* Text div */}
          <div className=" w-[420px] h-fit mt-20">
            <h1 className=" text-white sm:text-[2.2rem] mb-2 sm:mb-5 text-3xl font-extrabold text-center sm:text-start">
              Seize Early Oppotunites In The Metaverses For Business & Leisure
            </h1>
            {/* <br /> */}
            <p className=" text-center sm:text-start font-sans font-light text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              atque, aspernatur veniam id nemo illo accusamus quisquam eos sint
              cupiditate libero quod quidem soluta unde maiores accusantium
              neque molestiae et!
            </p>

            {/* buttons container */}
            <div className=" mt-6 sm:flex grid w-52 sm:w-auto mx-auto sm:mx-0 gap-3">
              <button className=" bg-green-500 p-2 px-6 hover:bg-green-600 hover:border-green-600 duration-150 rounded-full border-[1px] border-green-500 text-sm font-semibold text-black">
                Explore Servises
              </button>
              <button className=" p-2 px-8 rounded-full text-sm font-semibold focus-within:bg-slate-50/5 border-[1px] hover:bg-slate-50/5 border-white">
                Contact us
              </button>
            </div>

            {/* <div className=" p-10 mt-10 mx-auto relative w-fit h-fit sm:hidden">
              <div className=" absolute h-72 rounded-[40px] w-72 bg-black/20"></div>
              <img className=" w-72 rounded-[40px]" src={smVrman} alt="" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className=" section-two  flex justify-center pt-20 mb-20 relative">
        {/* Blur Div background */}
        <div className=" bg-green-900/80 w-[500px] h-96 absolute z-0 blur-[80px] top-40"></div>

        <div className=" text-slate-200 lg:w-[900px] z-10">
          <h1
            ref={secTwo}
            className={
              secTwoinView
                ? " text-xl sm:text-4xl font-bold text-center sm:mx-0  mx-6 duration-700"
                : "opacity-0 text-xl sm:text-4xl font-bold text-center sm:mx-0  mx-6 duration-500"
            }
          >
            Your Trusted Key Management Experts, Providing Secure Access and
            Peace of Mind.
          </h1>
          <br />
          <p
            ref={secTwo}
            className={
              secTwoinView
                ? " text-center text-sm sm:mx-0 mx-5 mb-3 duration-700"
                : "opacity-0 text-center text-sm sm:mx-0 mx-5 mb-3"
            }
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eum
            officia aliquid similique quisquam amet voluptatum consectetur, eos,
            inventore voluptates exercitationem dolor eligendi laudantium
            perferendis? Corporis quis rem dolorem obcaecati.
          </p>

          {/* Columes */}
          <div
            ref={secTwo}
            className={
              secTwoinView
                ? " pt-6 grid sm:grid-cols-2 gap-4 mx-4  w-fit sm:mx-auto duration-100"
                : "blur-md pt-6 grid grid-cols-2 w-fit mx-auto duration-700"
            }
          >
            <div className=" sm:w-96   bg-white/5 border-[0.2px] primary-blur border-white/5 p-4 rounded-2xl mx- sm:rounded-md gap-5 sm:gap-0 flex">
              {/* Icon */}
              <div className=" w-fit mx-auto m-2 h-fit rounded-full sm:mr-2 p-2 bg-slate-700 ">
                <img className=" w-28 sm:w-16" src={nurse} alt="" />
              </div>
              {/* Text */}
              <div>
                <h1 className=" font-bold text-sm sm:text-justify">
                  Individualisation
                </h1>
                <p className=" text-xs text-justify ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam eos maxime quo explicabo neque sed aperiam mollitia eum,
                  reiciendis sunt dignissimos ipsam iust!
                </p>
              </div>
            </div>

            <div className=" sm:w-96   bg-white/5 border-[0.2px] primary-blur border-white/5 p-4 rounded-2xl mx- sm:rounded-md gap-5 sm:gap-0 flex">
              {/* Icon */}
              <div className=" w-fit mx-auto m-2 h-fit rounded-full sm:mr-2 p-2 bg-slate-700 ">
                <img className=" w-28 sm:w-16" src={bitcoin} alt="" />
              </div>
              {/* Text */}
              <div>
                <h1 className=" font-bold text-sm sm:text-justify ">
                  Individualisation
                </h1>
                <p className=" text-xs text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam eos maxime quo explicabo neque sed aperiam mollitia eum,
                  reiciendis sunt dignissimos ipsam iust!
                </p>
              </div>
            </div>

            <div className=" sm:w-96   bg-white/5 border-[0.2px] primary-blur border-white/5 p-4 rounded-2xl mx- sm:rounded-md gap-5 sm:gap-0 flex">
              {/* Icon */}
              <div className=" w-fit mx-auto m-2 h-fit rounded-full sm:mr-2 p-2 bg-slate-700 ">
                <img className=" w-28 sm:w-16" src={star} alt="" />
              </div>
              {/* Text */}
              <div>
                <h1 className=" font-bold text-sm sm:text-justify">
                  Individualisation
                </h1>
                <p className=" text-xs text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam eos maxime quo explicabo neque sed aperiam mollitia eum,
                  reiciendis sunt dignissimos ipsam iust!
                </p>
              </div>
            </div>

            <div className=" sm:w-96   bg-white/5 border-[0.2px] primary-blur border-white/5 p-4 rounded-2xl mx- sm:rounded-md gap-5 sm:gap-0 flex">
              {/* Icon */}
              <div className=" w-fit mx-auto m-2 h-fit rounded-full sm:mr-2 p-2 bg-slate-700 ">
                <img className=" w-28 sm:w-16" src={movie} alt="" />
              </div>
              {/* Text */}
              <div>
                <h1 className=" font-bold text-sm sm:text-justify">
                  Individualisation
                </h1>
                <p className=" text-xs text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam eos maxime quo explicabo neque sed aperiam mollitia eum,
                  reiciendis sunt dignissimos ipsam iust!
                </p>
              </div>
            </div>
          </div>
          {/* Explore button */}
          <div className=" mt-8 w-fit mx-auto ">
            <button className=" bg-green-500  focus:bg-green-600 text-black p-2 px-8 text-sm font-bold rounded-full">
              Explore Servises
            </button>
          </div>
        </div>
      </div>

      {/* Section Three */}
      <div className=" section-three h-fit relative overflow-hidden">
        {/* Webs on bg */}
        <div className=" absolute z-10">
          <img src={webs} alt="" />
        </div>

        <div className=" lg:w-[900px] mx-auto sm:pb-14 sm:pt-36 grid sm:flex gap-10 text-sm z-20 relative">
          {/* Blur Div background */}
          <div className=" bg-green-900/80 pb-52  w-[500px] h-96 absolute z-0 blur-[80px] top-56 sm:top-auto left-52 sm:left-96"></div>
          <div
            ref={secThree}
            className={
              secThreeinView
                ? " text-slate-200 sm:w-1/2 sm:m-0 m-8 mb-0 z-40 duration-1000"
                : "  sm:w-1/2 sm:m-0 m-8 mb-0 z-40 text-slate-200"
            }
          >
            <h2 className=" font-bold text-xl sm:text-3xl sm:text-justify text-center mb-2">
              Market Oppotunities
            </h2>
            {/* <br /> */}
            <p className=" font-semibold z-40 sm:text-justify text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              fuga magnam accusamus corporis ducimus, repellat hic itaque ab
              dolorum odio voluptate
            </p>
            <br />
            <ul className=" list-disc p-4 pb-0 text-justify z-20">
              <li className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti fuga magnam accusamus corporis ducimus, repellat hic
                itaque ab dolorum odio
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti fuga magnam accusamus corporis ducimus, repellat hic
                itaque ab dolorum odio
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti fuga magnam accusamus corporis ducimus, repellat hic
                itaque ab dolorum odio
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti fuga magnam accusamus corporis ducimus, repellat hic
                itaque ab dolorum odio
              </li>
            </ul>
          </div>
          <div
            ref={secThree}
            className={
              secThreeinView
                ? " sm:h-[100px] mb-20 my-0 w-1/2 mx-auto flex justify-center duration-1000"
                : " opacity-10 w-1/2 mb- duration-300 mx-auto flex justify-center"
            }
          >
            <img className=" z-40 sm:h-96" src={SimImg} alt="sim shape image" />
          </div>
        </div>
        {/* section-three right box !!!!!!!!!!!!!!!!!!!!!!!!! */}
        <div className=" avg-blur h-full w-1/3 right-0 bg-white/5 absolute top-0"></div>
      </div>

      {/* Section-four */}
      <div className=" mb-20 text-slate-200 ">
        <div className=" lg:w-[900px] mx-auto text-center pt-20 relative">
          {/* Blur Div background */}
          <div className=" bg-green-900/45 w-[500px] h-96 absolute z-0 blur-[80px] top-96"></div>
          <div className=" bg-green-900/40 w-[500px] h-96 absolute z-0 blur-[80px] top-96 left-96"></div>

          <div className=" z-30">
            <h2 className=" text-xl sm:text-3xl font-bold mb-2">
              Key Features
            </h2>
            {/* <br /> */}
            <p className=" px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ipsum provident voluptas sed. Illum adipisci,
              voluptatem et aut quos enim velit sint quibusdam quaerat ipsa.
              Quidem animi voluptas odit voluptatibus.
            </p>
          </div>

          <div className=" z-30 bg-white/5 border-[0.5px] text-slate-200 border-white/5 rounded-[50px] sm:p-14 p-6 mt-8 grid mx-4 sm:mx-0 sm:grid-cols-3 sm:gap-0 gap-6">
            <div className=" z-40 h-52 pb-4 grid border-dotted sm:border-r-2 sm:border-b-2 justify-center border-white/30">
              {/* Icon */}
              <div className=" flex justify-center py-4">
                <img className=" h-10" src={game} alt="" />
              </div>
              {/* Text */}
              <div className=" w-56">
                <h3 className=" font-bold text-sm">Gaming</h3>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis debitis similique rem distinctio impedit quaerat
                  quasi possimus labore, earum, enim minus hic excepturi quod
                  dicta incidunt animi quis, magni nulla.
                </p>
              </div>
            </div>
            <div className=" z-40 h-52 pb-4 grid border-dotted sm:border-r-2 sm:border-b-2 justify-center border-white/30">
              {/* Icon */}
              <div className=" flex justify-center py-4">
                <img className=" h-10" src={shop} alt="shop" />
              </div>
              {/* Text */}
              <div className=" w-56">
                <h3 className=" font-bold text-sm">Market Place</h3>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis debitis similique rem distinctio impedit quaerat
                  quasi possimus labore, earum, enim minus hic excepturi quod
                  dicta incidunt animi quis, magni nulla.
                </p>
              </div>
            </div>
            <div className=" z-40 h-52 grid pb-4 border-dotted sm:border-b-2 justify-center border-white/30">
              {/* Icon */}
              <div className=" flex justify-center py-3">
                <img className=" h-10" src={music} alt="" />
              </div>
              {/* Text */}
              <div className=" w-56">
                <h3 className=" font-bold text-sm">Entertainment</h3>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis debitis similique rem distinctio impedit quaerat
                  quasi possimus labore, earum, enim minus hic excepturi quod
                  dicta incidunt animi quis, magni nulla.
                </p>
              </div>
            </div>
            <div className=" z-40 h-52  pb-4 grid border-dotted sm:border-r-2  sm:border-b- justify-center border-white/30">
              {/* Icon */}
              <div className=" flex justify-center py-4">
                <img className=" h-10" src={health} alt="" />
              </div>
              {/* Text */}
              <div className=" w-56">
                <h3 className=" font-bold text-sm">Banking District</h3>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis debitis similique rem distinctio impedit quaerat
                  quasi possimus labore, earum, enim minus hic excepturi quod
                  dicta incidunt animi quis, magni nulla.
                </p>
              </div>
            </div>
            <div className=" z-40 h-52  pb-4 grid sm:border-dotted sm:border-r-2 border-b- justify-center border-white/30">
              {/* Icon */}
              <div className=" flex justify-center py-4">
                <img className=" h-10" src={bag} alt="" />
              </div>
              {/* Text */}
              <div className=" w-56">
                <h3 className=" font-bold text-sm">Shopping</h3>
                <p className=" text-xs ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis debitis similique rem distinctio impedit quaerat
                  quasi possimus labore, earum, enim minus hic excepturi quod
                  dicta incidunt animi quis, magni nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section five */}
      <div className=" text-slate-300 justify-center mt-20 relative overflow-hidden">
        {/* Blur Div background */}
        <div className=" bg-green-900/55 w-[500px] h-96 absolute left-40  blur-[80px] top-52"></div>
        <div className=" bg-green-900/40 sm:hidden w-[500px] h-96 absolute right-40  blur-[80px]  bottom-20"></div>

        <div className=" grid justify-center  text-center z-40">
          <div className=" sm:w-[800px] w-80 p-4 mx-10 sm:mx-auto mb-6 sm:mb-10">
            <h1 className=" sm:text-3xl text-xl mb-2 font-bold">
              Documents: Whitepaper & Pitch Deck
            </h1>
            {/* <br /> */}
            <p className="text-sm font-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              dolorum nam illo? Necessitatibus magni inventore eveniet tempore.
              Labore ad cumque ratione nisi, atque eligendi, mollitia maxime
              sint velit exercitationem voluptatum!
            </p>
          </div>
          <div ref={secFive} className={secFiveinView ? "sm:flex grid  mx-4 gap-10 sm:mb-48 mb-20 sm:mt-10 sm:h-60 z-30 duration-1000" : "sm:flex grid  mx-4 gap-0 sm:mb-48 mb-20 sm:mt-10 sm:h-60 z-30 "}>
            <div
              ref={secFive}
              className={
                secFiveinView
                  ? " sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer duration-1000 rounded-2xl"
                  : " blur-md sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer rounded-2xl  "
              }
            >
              <div className=" w-52 hover:w-[13.5rem] duration-300">
                <img src={Thumbnail1} alt="" />
              </div>
              <div className="  bg-white/5 p-4  text-start rounded-b-2xl primary-blur">
                <h1 className=" text-lg font-semibold">WhitePaper EN</h1>
                <p className=" text-xs font-light w-44 text-justify">
                  dolorum nam illo? Necessitatibus magni inventore eveniet
                  tempore. Labore ad cumque ratione nisi, atque eligendi,
                  mollitia maxime
                </p>
              </div>
            </div>
            <div
              ref={secFive}
              className={
                secFiveinView
                  ? " sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer duration-1000 rounded-2xl"
                  : " blur-md sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer rounded-2xl "
              }
            >
              <div className=" w-52 hover:w-[13.5rem] duration-300">
                <img src={Thumbnail2} alt="" />
              </div>
              <div className="  bg-white/5 p-4  text-start rounded-b-2xl primary-blur">
                <h1 className=" text-lg font-semibold">WhitePaper EN</h1>
                <p className=" text-xs font-light w-44 text-justify">
                  dolorum nam illo? Necessitatibus magni inventore eveniet
                  tempore. Labore ad cumque ratione nisi, atque eligendi,
                  mollitia maxime
                </p>
              </div>
            </div>
            <div
              ref={secFive}
              className={
                secFiveinView
                  ? " sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer duration-1000 rounded-2xl"
                  : " blur-md sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer rounded-2xl"
              }
            >
              <div className=" w-52 hover:w-[13.5rem] duration-300">
                <img src={Thumbnail3} alt="" />
              </div>
              <div className="  bg-white/5 p-4  text-start rounded-b-2xl primary-blur">
                <h1 className=" text-lg font-semibold">WhitePaper EN</h1>
                <p className=" text-xs font-light w-44 text-justify">
                  dolorum nam illo? Necessitatibus magni inventore eveniet
                  tempore. Labore ad cumque ratione nisi, atque eligendi,
                  mollitia maxime
                </p>
              </div>
            </div>
            <div
              ref={secFive}
              className={
                secFiveinView
                  ? " sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer duration-1000 rounded-2xl"
                  : " blur-md sm:w-52 h-fit overflow-hidden grid justify-center cursor-pointer rounded-2xl"
              }
            >
              <div className=" w-52 hover:w-[13.5rem] duration-300">
                <img src={Thumbnail4} alt="" />
              </div>
              <div className="  bg-white/5 p-4  text-start rounded-b-2xl primary-blur">
                <h1 className=" text-lg font-semibold">WhitePaper EN</h1>
                <p className=" text-xs font-light w-44 text-justify">
                  dolorum nam illo? Necessitatibus magni inventore eveniet
                  tempore. Labore ad cumque ratione nisi, atque eligendi,
                  mollitia maxime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Six { Footer }*/}
      <div className=" text-slate-200 bg-slate-950 sm:pt-16 pt-10">
        <div className=" lg:w-[900px] sm:p-0 m-4 mx-auto  text-center">
          <h1 className=" sm:text-2xl text-lg font-bold mb-2 ">
            Stay Updated With Us
          </h1>
          {/* <br /> */}
          <p className=" text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            necessitatibus fuga aperiam officiis cupiditate ad corporis sed
            doloremque porro autem velit accusamus aut eaque inventore ipsa,
            iure commodi excepturi architecto.
          </p>
        </div>
        {/* Search box */}
        <div ref={subscribeBtn} className={subscribeBtninView ? " focus-within:border-slate-400  focus-within:border-[0.2px]  bg-slate-600/10 sm:w-[800px] mx-3 sm:p-1 rounded-full sm:mx-auto  sm:m-10 flex justify-between duration-[2s]" : "w-0 mx-3 sm:p-1 rounded-full sm:mx-auto  sm:m-10 flex"}>
          <input
            placeholder=""
            type="email"
            className=" bg-slate-600/0 outline-0 px-2 w-full"
          />
          <button className=" bg-green-600 text-black font-semibold p-2 rounded-3xl px-4 m-0">
            Subscribe
          </button>
        </div>
        <br />
        <br />
        <div className=" sm:w-[900px] mx-auto border-t-[1px] border-slate-400 pt-10 grid p-4 sm:flex justify-between">
          <div className=" mb-10">
            <div className=" w-36 pb-2">
              <img src={logo} alt="" />
            </div>
            <p className=" mb-5 text-xs sm:w-80 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate voluptatem delectus temporibus ducimus, corrupti
              nesciunt eius?
            </p>
            <div className=" w-40 cursor-pointer">
              <img src={socmed} alt="" />
            </div>
          </div>
          <div>
            <div className=" font-semibold text-lg text-slate-200">
              <h2>Marketplace</h2>
            </div>
            <p className=" mb-5 text-xs sm:w-40 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate voluptatem delectus temporibus ducimus, corrupti
              nesciunt eius?
            </p>
          </div>
          <div>
            <div className=" text-slate-200 text-lg font-semibold">
              <h2>Head Quater</h2>
            </div>
            <p className=" mb-5 text-xs sm:w-60 w-">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              cupiditate voluptatem delectus temporibus ducimus, corrupti
              nesciunt eius?
            </p>
          </div>
        </div>

        {/* Section seven */}
        <div className=" bg-slate-800 text-slate-200 p-4 sm:font-semibold text-sm">
          <div className=" grid  sm:w-[900px] mx-auto sm:flex justify-between">
            <h3>Copyright 2024 Blackrose Club - Developed by Solomon Dev</h3>
            <ul className=" flex gap-4  sm:gap-6 text-xs">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>ROADMAP</li>
              <li>SERVICES</li>
              <li>TEAM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
