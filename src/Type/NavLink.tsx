export default interface NavLinkType {
    navLinkId: string,
    scrollToId: string,
    navNumber: number, 
    activeNavLinkId: string,
    setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
}