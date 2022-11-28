import NavLinkType from "../../Type/NavLink";

function NavLink({ navLinkId, scrollToId, navNumber, activeNavLinkId, setActiveNavLinkId }: NavLinkType) {
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
		>
            <span id="navNumber">0{navNumber}. </span>
			{navLinkId}
		</span>
	);
}

export default NavLink