import NavLink from "./NavLink";

function Navigation() {
    const navLinks = [
        {navLinkId: 'Home', scrollToId: 'HomeContainer', navNumber: 1},
        {navLinkId: 'Works', scrollToId: 'WorksContainer', navNumber: 2},
        {navLinkId: 'About', scrollToId: 'AboutContainer', navNumber: 3},
    ]


    return (
        <nav id="navigation">
            <div className="navWeb">
            {navLinks.map(
		    ({navLinkId, scrollToId, navNumber}) =>
		        <NavLink 
                    key={navLinkId}
			        navLinkId={navLinkId} 
			        scrollToId={scrollToId} 
                    navNumber = {navNumber}
	
		        />
	            )}
            </div>
          <div className="navbar">
            <div className="container nav-container">
                <input className="checkbox" type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                </div>  
            <div className="menu-items">
            {navLinks.map(
		    ({navLinkId, scrollToId, navNumber}) =>
		        <NavLink 
                    key={navLinkId}
			        navLinkId={navLinkId} 
			        scrollToId={scrollToId} 
                    navNumber = {navNumber}
	
		        />
	      )}
            </div>
            </div>
        </div>
	    </nav>
    )
}

export default Navigation