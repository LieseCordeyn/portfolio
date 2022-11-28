import NavLinkType from "../../Type/NavLink";

function NavLink({ navLinkId, scrollToId, setActiveNavLinkId }: NavLinkType) {
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
		 	onClick={handleClick}
		>
			{navLinkId}
		</span>
	);
}

export default NavLink