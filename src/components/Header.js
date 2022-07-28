import { Link } from 'react-router-dom'
const Header = () => {
  return (



    <div className=" h-10 bg-[#C4CFD2] fixed top-0  right-0 w-1/4 flex justify-end items-end list-none pb-2 text-[#3e484a] text-xl font-['Lato']">
      <Link to="/">
        <li className="mr-10 text-3x1"><span className="text-[#D67835]">{`<`}</span><span className=""> Home </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </Link>

      <a href="#About">

        <li className="mr-10"><span className="text-[#D67835]">{`<`}</span><span className=""> About </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </a>
      <a href="#Gallery">

        <li className="mr-5"><span className="text-[#D67835]">{`<`}</span><span className=""> Gallery </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </a>
    </div>
  )
}
export default Header;