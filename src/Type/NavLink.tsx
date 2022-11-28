export default interface NavLinkType {
    navLinkId: string,
    scrollToId: string,
    activeNavLinkId: string,
    setActiveNavLinkId: React.Dispatch<React.SetStateAction<string>>
}