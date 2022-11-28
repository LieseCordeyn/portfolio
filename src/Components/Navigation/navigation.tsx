import { useState } from "react"
import NavLink from "./NavLink";

function Navigation() {
    const navLinks = [
        {navLinkId: 'Home', scrollToId: 'HomeContainer'},
        {navLinkId: 'Works', scrollToId: 'WorksContainer'},
        {navLinkId: 'About', scrollToId: 'AboutContainer'},
        {navLinkId: 'Contact', scrollToId: 'ContactContainer'},
    ]

    const [activeNavLinkId, setActiveNavLinkId] = useState('');


    return (
        <nav>
	      {navLinks.map(
		    ({navLinkId, scrollToId}) =>
		        <NavLink 
			        navLinkId={navLinkId} 
			        scrollToId={scrollToId} 
			        activeNavLinkId={activeNavLinkId}
			        setActiveNavLinkId={setActiveNavLinkId} 
		        />
	      )}
	    </nav>
    )
}

export default Navigation