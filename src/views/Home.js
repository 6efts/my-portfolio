import proj1 from '../images/P1/axie1.JPG'
import proj2 from '../images/P2/js1.JPG'
import proj3 from '../images/P3/type1.JPG'
import proj4 from '../images/P4/todo1.JPG'
import proj5 from '../images/P5/bp1.JPG'
import proj6 from '../images/P6/nft1.JPG'
import proj7 from '../images/P7/travel1.JPG'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { FaGithub, FaLinkedinIn, FaGitlab, FaFacebook, FaGoogle } from "react-icons/fa";


const Home = () => {
  return (
    <>
      {/* <div className="h-screen font-lato"> */}

      <Header />
      <div className="flex w-full h-[100vh] font-['Lato']" >
        <div className=" h-full w-[25%] flex bg-[#3e484a] flex-col">
          <div className="w-[100%] h-3/5 ]"></div>
          <div className="w-[100%] h-2/5  border-r-2 border-[#D67835] flex  items-end flex-col pt-1.5 pr-4 gap-3">
            <a href="https://github.com/6efts">
              <FaGithub size={30} color="#C4CFD2" className="hover:bg-[#D67835] hover: rounded-full cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/jarren-dehonor/">

              <FaLinkedinIn size={30} color="#C4CFD2" className="hover:bg-[#D67835] hover: rounded-md cursor-pointer" />
            </a>
            <a href="https://gitlab.com/vince.dehonor1">

              <FaGitlab size={30} color="#C4CFD2" className="hover:bg-[#D67835] hover: rounded-full cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/6efts/">
              <FaFacebook size={30} color="#C4CFD2" className="hover:bg-[#D67835] hover: rounded-full cursor-pointer" />
            </a>


          </div>
        </div>
        <div id="Home" className="  bg-[#3e484a] h-full w-[75%]  ">
          <div className=" h-[60%] w-full">


          </div>
          <div className=" h-[40%] w-full pl-4 ">
            <div className="text-4xl text-[#C4CFD2] ">

              Hi,
              <p>
                I'm <span className="text-[#D67835]">Vince</span>,
              </p>
              <p className="text-[#D67835]">Full-stack Web Developer</p>
              <p className="inline-block text-xl text-[#C4CFD2] ">
                HTML5, CSS3/SaSS/Tailwind, JavasScript, React,
              </p>
              <p className="text-xl text-[#C4CFD2] mt-3">
                Node, Express, MongoDB, Mongoose,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="About" className="h-[60vh]  bg-[#3e484a] w-full flex-wrap flex font-['Lato'] ">
        <div className="w-[25%] h-full  "></div>
        <div className="w-[50%] flex  flex-wrap flex-col">
          <div className=" h-[60%]  flex items-end">
            <div className="mt-40  text-xl text-[#3e484a] text-justify">
              <p className="text-[#C4CFD2]">I'm a <span className="text-[#D67835]">Full-Stack Web Developer</span> and I create modern website designs. I made this <span className="text-[#D67835]">portfolio</span> to showcase everything that I learned and to <span className="text-[#D67835]">inspire</span> others. I am still improving my skills by <span className="text-[#D67835]">exploring</span> new things and building small projects from <span className="text-[#D67835]">scratch</span>. I love to solve problems as it <span className="text-[#D67835]">enhance</span> my logical thinking.
              </p>

            </div>
          </div>
          <div className="h-[40%] border-t-2 border-[#D67835] flex-wrap flex justify-end pt-2" >
            <p className=" text-xl  text-[#C4CFD2]">
              Feel free to check my previous projects.
            </p>
          </div>
        </div>
        <div className="w-[25%] h-full ">

        </div>
      </div>
      <div className="h-[5vh] bg-[#3e484a] flex-wrap w-full "></div>
      <div className="w-full h-[100vh] bg-[#3e484a]  flex-wrap flex ">
        <div id="Gallery" className="w-[75%]  border-r-2 border-[#D67835] flex flex-wrap justify-end px-4 pt-4 font-['Lato']">
          <div className="flex  w-[80%] flex-wrap justify-end h-[100%] ">

            <div className="w-[30%] h-[30%]  bg-black hover:opacity-40 ml-5 cursor-pointer text-right rounded-lg">
              <Link to="/Project1">
                <div className="h-[75%] w-full bg-[#C4CFD2]  rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj1} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">AXIE NFT GAME</p>
                    <p className="text-[#3e484a] text-l">SKILL GUIDE</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-[30%] h-[30%]  bg-black hover:opacity-40 cursor-pointer ml-5 text-right rounded-lg">
              <Link to="/Project2">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-cover w-[100%] h-[100%] " src={proj2} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">JUANTED TO FLY</p>
                    <p className="text-[#3e484a] text-l">JAVASCRIPT GAME</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] h-[30%] bg-black hover:opacity-40 cursor-pointer  ml-5 text-right rounded-lg">
              <Link to="/Project3">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj3} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">POKEMON APP</p>
                    <p className="text-[#3e484a] text-l">GUIDE</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] h-[30%] bg-black hover:opacity-40 cursor-pointer  ml-5 text-right rounded-lg">
              <Link to="/Project4">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj4} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">TASK / TO-DOs</p>
                    <p className="text-[#3e484a] text-l">APP</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] h-[30%] bg-black hover:opacity-40 cursor-pointer  ml-5 text-right rounded-lg">
              <Link to="/Project5">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj5} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">E-COMMERCE</p>
                    <p className="text-[#3e484a] text-l">CLOTHING APP</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] h-[30%] bg-black hover:opacity-40 cursor-pointer  ml-5 text-right rounded-lg">
              <Link to="/Project6">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj6} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">E-COMMERCE</p>
                    <p className="text-[#3e484a] text-l">NFT ART GALLERY</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[30%] h-[30%]  bg-black hover:opacity-40 cursor-pointer  text-right rounded-lg">
              <Link to="/Project7">
                <div className="h-[75%] w-full bg-[#C4CFD2] rounded-t-lg p-3 ">
                  <img className="object-center w-[100%] h-[100%] " src={proj7} alt="project1" />
                </div>
                <div className="h-[25%] w-full bg-[#C4CFD2]  rounded-b-lg flex flex-wrap ">
                  <div className=" w-[35%]"></div>
                  <div className=" w-[65%] border-t-2 border-[#D67835] pr-3">
                    <p className="text-[#3e484a] text-2xl">LAYAG TOURS</p>
                    <p className="text-[#3e484a] text-l">TRAVEL APP</p>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
        <div className="w-[25%]  flex items-end pb-8 pl-4 font-['Lato']">
          <a className="h-12 border-none border-2 w-44 border-[#C4CFD2] rounded-xl text-center pt-2 bg-[#D67835] text-xl hover:bg-gray-500 hover:text-[#D67835] transition delay-75 " href="https://drive.google.com/u/0/uc?id=1Lj-Ki9FVhqQOSQyWJMOaxPY-nyaxBIqk&export=download" download>Download CV</a>
        </div>
      </div>





    </>
  )
}

export default Home;