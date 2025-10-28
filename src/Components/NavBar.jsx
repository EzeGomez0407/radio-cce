import { NavLink } from 'react-router'
import logo from '/logo.png'

export default function NavBar(){
    return <>
        <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-10 py-4 fixed top-0 inset-x-0 bg-[#242424] z-2000">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 text-primary">
                <img src={logo} alt='logo de la iglesia'/>
              </div>
            </div>

            {/* Barra de navegacion */}
            <nav className="flex items-center justify-end gap-8">
              <div className="items-center gap-8 flex">
                <NavLink
                  className="text-white hover:text-[#707070] font-medium transition-colors hover:text-primary"
                  to="/"
                >
                  Inicio
                </NavLink>
                <NavLink
                  className="text-white hover:text-[#707070] font-medium transition-colors hover:text-primary"
                  to="events"
                >
                  Eventos
                </NavLink>
                <a
                  className="text-white hover:text-[#707070] font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Iglesia
                </a>
              </div>
            </nav>
          </header>
    </>
}