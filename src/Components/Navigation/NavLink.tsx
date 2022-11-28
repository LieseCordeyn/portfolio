import NavLinkType from "../../Type/NavLink";
import { NavContext } from '../../context/navContext';
import { useContext } from "react";

function NavLink({ navLinkId, scrollToId, navNumber}: NavLinkType) {

    const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext)

    const handleClick = () => {
		setActiveNavLinkId(navLinkId);
        const input = document.getElementById(scrollToId)
        if (input){
            input.scrollIntoView({
                behavior: 'smooth', // gives an ease-in-out effect to our scroll
            });
        }
	};
	
	return (
		<span 
		 	id={navLinkId} 
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
		 	onClick={handleClick}
		>	{
			navNumber?  <span id="navNumber">0{navNumber}. </span> : ""
		}
           
			{navLinkId}
		</span>
	);
}

export default NavLink