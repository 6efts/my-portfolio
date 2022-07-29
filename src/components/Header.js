import { HashLink } from 'react-router-hash-link';

const Header = () => {

  return (
    <div className=" h-10 bg-[#C4CFD2] fixed top-0  right-0 w-1/4 flex justify-end items-end list-none pb-2 text-[#3e484a] text-xl font-['Lato']">

      <HashLink to="/#Home">
        <li className="mr-10 text-3x1"><span className="text-[#D67835]">{`<`}</span><span className=""> Home </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </HashLink>

      <HashLink to="/#About">
        <li className="mr-10"><span className="text-[#D67835]">{`<`}</span><span className=""> About </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </HashLink>
      <HashLink
        to="/#Projects">
        <li className="mr-5"><span className="text-[#D67835]">{`<`}</span><span className=""> Projects </span><span className="text-[#D67835]">/</span><span className="text-[#D67835]">{`>`}</span></li>
      </HashLink>
    </div>
  )
}
export default Header;