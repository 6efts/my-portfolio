import Header from '../components/Header'
import image1 from '../images/P7/travel2.JPG'
import image2 from '../images/P7/travel3.JPG'
import image3 from '../images/P7/travel4.JPG'

const Project7 = () => {
  return (
    <>

      <Header />
      <div className="w-full h-14 bg-[#3e484a] "></div>
      <div className="flex h-[65vh] bg-[#3e484a] ">
        <div className="w-9/12  border-r-[#D67835] border-r-2 flex flex-col justify-end items-end p-4  ">
          <div className="h-[50%]  w-[60%] px-4 flex  max-w-5xl justify-end flex-col font-['Lato'] text-[#C4CFD2] ">
            <p className="text-2xl text-[#D67835] ">LAYAG TOURS <span className="text-sm text-[#C4CFD2]">TRAVEL APP </span><span className="text-sm"> : HTML5, CSS3, Javascript, React JS, Node JS, Mongo DB</span></p>
            <p> <br /> The website is called Layag tours which layag means is to sail or in other words to travel but the application is exclusive places in the philippines. The functionality of the app is like any normal travel app </p></div>
          <div className="w-[60%] h-[50%]  flex p-4">
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image1} alt="axie-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-center rounded " src={image2} alt="axie-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image3} alt="axie-icon" />
            </div>
          </div>
        </div>
        <div className="flex items-end w-1/4 pl-8 text-2xl font-['Lato'] text-[#C4CFD2]">GO TO :<a className="ml-2 hover:text-[#D67835] " href=" https://github.com/6efts/project7-UI " target="_blank">  GITHUB LINK</a></div>
      </div>
      <div className="flex h-[29vh] bg-[#3e484a] font-['Lato'] ">
        <div className="w-[74.9%]"></div>
        <div className='w-[20%] border-t-[#D67835]   text-2xl  border-t-2 pl-8 text-[#C4CFD2] '>
          <a className="ml-24 hover:text-[#D67835]" href="https://layag-travel-tours.netlify.app/" target="_blank">HEROKU SITE</a>
        </div>
        <div className="w-[5.1%]"></div>
      </div>

    </>
  )
}

export default Project7;