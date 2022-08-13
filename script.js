const Menu = document.getElementById("Menu_Button")
const ListItems = document.getElementById("Nav_List")
const NavbarContainer = document.getElementById("Navbar_Container")
const container = document.getElementById("Main_Container")


Menu.addEventListener('click', () => {
    ListItems.classList.toggle('active')
    NavbarContainer.classList.toggle('deactive')
    container.classList.toggle('deactive')
})