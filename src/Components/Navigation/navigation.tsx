import { useState } from "react"
import NavLink from "./NavLink";

function Navigation() {
    const navLinks = [
        {navLinkId: 'Home', scrollToId: 'HomeContainer', navNumber: 1},
        {navLinkId: 'Works', scrollToId: 'WorksContainer', navNumber: 2},
        {navLinkId: 'About', scrollToId: 'AboutContainer', navNumber: 3},
        {navLinkId: 'Contact', scrollToId: 'ContactContainer', navNumber: 4},
    ]

    const [activeNavLinkId, setActiveNavLinkId] = useState('Home');


    return (
        <nav id="navigation">
	      {navLinks.map(
		    ({navLinkId, scrollToId, navNumber}) =>
		        <NavLink 
                    key={navLinkId}
			        navLinkId={navLinkId} 
			        scrollToId={scrollToId} 
                    navNumber = {navNumber}
			        activeNavLinkId={activeNavLinkId}
			        setActiveNavLinkId={setActiveNavLinkId} 
		        />
	      )}
	    </nav>
    )
}

export default Navigation