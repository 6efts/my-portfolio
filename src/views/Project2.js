import Header from '../components/Header'
import image1 from '../images/P2/js2.JPG'
import image2 from '../images/P2/js3.JPG'
import image3 from '../images/P2/js4.JPG'

const Project2 = () => {
  return (
    <>

      <Header />
      <div className="w-full h-14 bg-[#3e484a] "></div>
      <div className="flex h-[65vh] bg-[#3e484a] ">
        <div className="w-9/12  border-r-[#D67835] border-r-2 flex flex-col justify-end items-end p-4  ">
          <div className="h-[50%]  w-[60%] px-4 flex flex-col max-w-5xl justify-end font-['Lato'] text-[#C4CFD2] ">
            <p className="text-2xl text-[#D67835] ">JUANTED TO FLY <span className="text-sm text-[#C4CFD2]">JS Game </span><span className="text-sm"> : HTML5, JS Canvas, CSS3, Javascript</span></p>
            <br /> <p>The game is inspired by filipino culture or theme during the pandemic time thats why i used facemask, viruses and etc, The mechanics of the game is simple, you just need to dodge the viruses and collect some points which the logo is called relief goods or basket of food, and then if u get the facemask you will be invulnerable for a seconds.</p></div>
          <div className="w-[60%] h-[50%]  flex p-4">
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image1} alt="jsgame1-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded mr-6  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image2} alt="jsgame2-icon" />
            </div>
            <div className="w-[33%] border-2 border-[#D67835]  rounded  ">
              <img className="w-[100%] h-[100%] object-cover rounded " src={image3} alt="jsgame3-icon" />
            </div>
          </div>
        </div>
        <div className="flex items-end w-1/4 pl-8 text-2xl font-['Lato'] text-[#C4CFD2]">GO TO :<a className="ml-2 hover:text-[#D67835] " href=" https://github.com/6efts/project-2 " target="_blank">  GITHUB LINK</a></div>
      </div>
      <div className="flex h-[29vh] bg-[#3e484a] font-['Lato'] ">
        <div className="w-[74.9%]"></div>
        <div className='w-[20%] border-t-[#D67835]   text-2xl  border-t-2 pl-8 text-[#C4CFD2] '>
          <a className="ml-24 hover:text-[#D67835]" href="#" target="_blank">HEROKU SITE</a>
        </div>
        <div className="w-[5.1%]"></div>
      </div>

    </>
  )
}

export default Project2;