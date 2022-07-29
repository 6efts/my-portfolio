import Header from '../components/Header'
import image1 from '../images/P3/type1.JPG'
import image2 from '../images/P3/type2.JPG'
import image3 from '../images/P3/type3.JPG'

const Project3 = () => {
  return (
    <>

      <Header />
      <div className="w-full h-14 bg-[#3e484a] "></div>
      <div className="flex h-[65vh] bg-[#3e484a] ">
        <div className="w-9/12  border-r-[#D67835] border-r-2 flex flex-col justify-end items-end p-4  ">
          <div className="h-[50%]  w-[60%] px-4 flex  max-w-5xl justify-end flex-col font-['Lato'] text-[#C4CFD2] ">
            <p className="text-2xl text-[#D67835] ">POKEMON APP <span className="text-sm text-[#C4CFD2]">GUIDE </span><span className="text-sm"> : HTML5, CSS3, Javascript, REACT JS</span></p>
            <p>(<span className="text-[#D67835]">Mobile responsive</span>) <br /> This website is connected to online API to get the data, and its all about Pokemon guides and types and other details about pokemons</p></div>
          <div className="w-[60%] h-[50%]  flex p-4">
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image1} alt="axie-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image2} alt="axie-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image3} alt="axie-icon" />
            </div>
          </div>
        </div>
        <div className="flex items-end w-1/4 pl-8 text-2xl font-['Lato'] text-[#C4CFD2]">GO TO :<a className="ml-2 hover:text-[#D67835] " href=" https://github.com/6efts/project-3 " target="_blank">  GITHUB LINK</a></div>
      </div>
      <div className="flex h-[29vh] bg-[#3e484a] font-['Lato'] ">
        <div className="w-[74.9%]"></div>
        <div className='w-[11%] border-t-[#D67835]   text-2xl  border-t-2 pl-8 text-[#C4CFD2] '>
          <a className="ml-20 hover:text-[#D67835]" href="https://pokemon-app-guide.netlify.app" target="_blank">HEROKU SITE</a>
        </div>
        <div className="w-[14.1%]"></div>
      </div>

    </>
  )
}

export default Project3;