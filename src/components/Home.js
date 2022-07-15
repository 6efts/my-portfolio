import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="relative flex h-screen font-lato">
        <div className="bg-[#3e484a] w-[40%] "></div>
        <div className="  bg-[#C4CFD2] w-[60%] ">
          <div className="  h-3/5 w-2/4 mx-[42%] my-40 ">
            <div className="  text-[#3e484a] text-4xl ">
              Hi,
              <p>
                I'm <span className="text-[#D67835]">Vince</span>,
              </p>
              <p className="text-[#D67835]">Full-stack Web Developer</p>
              <p className="inline-block text-xl text-gray-400 ">
                HTML5; CSS3/SaSS/Tailwind; JavasScript; React; 
              </p>
              <p className="inline-block text-xl text-gray-400 ">
               Node; Express; MongoDB; Mongoose;
              </p>
            </div>
            <div className="mt-40  text-xl text-[#3e484a] text-justify">
              <p>I'm a <span className="text-[#D67835]">Full-Stack Web Developer</span> and I create modern website designs. I made this <span className="text-[#D67835]">portfolio</span> to showcase everything that I learned and to <span className="text-[#D67835]">inspire</span> others. I am still improving my skills by <span className="text-[#D67835]">exploring</span> new things and building small projects from <span className="text-[#D67835]">scratch</span>. I love to solve problems as it <span className="text-[#D67835]">enhance</span> my logical thinking.
              </p>
              <p className="inline-block mt-8">
                Feel free to check my previous projects.
              </p>
            </div>
          </div>
        </div>
        
        <div className=" w-[60%]  absolute top-40 left-24 flex flex-wrap  ">
          <Link className="w-[30%] object-cover cursor-pointer rounded-l-md bg-black"to="/project1">
            <div className="">
              <img
                className="shadow-2xl h-72 rounded-l-md hover:opacity-50 "
                src={image1}
                alt="image1"
              />
            </div>
          </Link>
          
          <div className=" w-[30%]  object-cover cursor-pointer ml-5 rounded-l-md bg-black">
            <img
              className="shadow-2xl h-72 rounded-l-md hover:opacity-50"
              src={image2}
              alt="image2"
            />
          </div>
          <div className=" w-[30%]  object-cover cursor-pointer ml-5 rounded-l-md bg-black">
            <img
              className="shadow-2xl h-72 rounded-l-md hover:opacity-50"
              src={image3}
              alt="image3"
            />
          </div>
          <div className=" w-[30%]  object-cover cursor-pointer mt-10 rounded-l-md bg-black">
            <img
              className="shadow-2xl h-72 rounded-l-md hover:opacity-50"
              src={image4}
              alt="image4"
            />
          </div>
          <div className="w-[30%]  object-cover cursor-pointer mt-10 ml-5 rounded-l-md bg-black">
            <img
              className="shadow-2xl h-72 rounded-l-md hover:opacity-50"
              src={image5}
              alt="image4"
            />
          </div>
          <div className="w-[30%]  object-cover cursor-pointer mt-10 ml-5 rounded-l-md bg-black">
            <img
              className="shadow-2xl h-72 rounded-l-md hover:opacity-50"
              src={image6}
              alt="image4"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;