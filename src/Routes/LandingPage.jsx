import './LandingPage.css'
import logo from '/logo.png'

// const bgWelcome = 'https://scontent.fpra1-1.fna.fbcdn.net/v/t39.30808-6/520977104_1144348281059082_306342019188300327_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF_AynqFr5BV3XF1SI19NC0v3V-LPh2MYi_dX4s-HYxiC_pvuKzUF1gAG4NcHq9Yqt2sMVxDnx6W6AsWV-eP6Zo&_nc_ohc=0myPd6wFVCsQ7kNvwGE5_s8&_nc_oc=AdllrJigIhbWpotyaCB2RZJDh9tJBrYRNRB84o_0Qpb9-W-wxbjAGVEtmC0aPTIZIrU&_nc_zt=23&_nc_ht=scontent.fpra1-1.fna&_nc_gid=WGhvPDCvY0sawPB__HJQDA&oh=00_AfdPK-8uK7Vh7YDgtcfnLBrYfICEsDsnJfVOPiBezmFktg&oe=68FD4840s'

export default function LandingPage() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 px-10 py-4 fixed top-0 inset-x-0 bg-[#242424] z-2000">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 text-primary">
                <img src={logo} alt='logo de la iglesia'/>
              </div>
            </div>

            {/* Barra de navegacion */}
            <nav className="flex items-center justify-end gap-8">
              <div className="items-center gap-8 flex">
                <a
                  className="text-base font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Inicio
                </a>
                <a
                  className="text-base font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Eventos
                </a>
                <a
                  className="text-base font-medium transition-colors hover:text-primary"
                  href="#"
                >
                  Contacto
                </a>
              </div>
            </nav>
          </header>

          <main className="flex-1 px-4 py-10 sm:px-10 lg:px-20">
            <div className="mx-auto flex max-w-5xl flex-col gap-12">
              <section className="@container">
                <div
                  className="relative flex min-h-[300px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center text-center pt-[90px]">
                  <div className='div-welcome rounded-[8px]'>
                    <div className="flex flex-col px-[20px] backdrop-contrast-50 backdrop-brightness-120 backdrop-blur-[2px]">
                      <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl w-full h-full p-2 pt-8 text-welcome">
                      Bienvenido a Centro Cristiano Esquina
                      </h1>
                      <p className="mx-auto max-w-2xl text-lg text-white/90 w-full h-full p-2 pb-8 text-welcome">
                      Un lugar de fe, comunidad y crecimiento espiritual. Te
                      invitamos a unirte a nosotros en nuestros servicios y
                      eventos.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="mb-6 text-center text-3xl font-bold">
                  Nuestros Servicios
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-background-light p-6 text-center dark:bg-background-dark/50">
                    <div className="mx-auto text-primary" data-icon="Cross">
                      <svg
                        fill="currentColor"
                        height="32px"
                        viewBox="0 0 256 256"
                        width="32px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H160a16,16,0,0,0-16,16v88H112V136a16,16,0,0,0-16-16H56V88H96a16,16,0,0,0,16-16V32h32V72a16,16,0,0,0,16,16h40Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">Reuniónes</h3>
                      <p className="text-base text-black/60 ">
                        Domingos a las 10:00 AM<br/>
                        Miercoles a las 20:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-background-light p-6 text-center dark:bg-background-dark/50">
                    <div className="mx-auto text-primary" data-icon="Users">
                      <svg
                        fill="currentColor"
                        height="32px"
                        viewBox="0 0 256 256"
                        width="32px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">Estudio Bíblico/Discipulado</h3>
                      <p className="text-base text-black/60 ">
                        Miércoles a las 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-background-light p-6 text-center dark:bg-background-dark/50">
                    <div className="mx-auto text-primary" data-icon="HandsClapping">
                      <svg
                        fill="currentColor"
                        height="32px"
                        viewBox="0 0 256 256"
                        width="32px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M168,24V8a8,8,0,0,1,16,0V24a8,8,0,0,1-16,0Zm35.83,17A7.9,7.9,0,0,0,208,42.13a8,8,0,0,0,6.84-3.83l8-13.11a8,8,0,1,0-13.66-8.33l-8,13.1A8,8,0,0,0,203.83,41Zm47.44,12.59a8,8,0,0,0-10.07-5.16l-15,4.85a8,8,0,0,0,2.45,15.62,8.15,8.15,0,0,0,2.46-.39l15-4.85A8,8,0,0,0,251.27,53.55Zm-30,39.94A79.71,79.71,0,0,1,208.68,190,80,80,0,0,1,62.49,208l-35-60.63A26,26,0,0,1,46.67,108.6l-4-6.94A26,26,0,0,1,61,63,26,26,0,0,1,72.4,31.63a26.05,26.05,0,0,1,30.81,3.58A26,26,0,0,1,147.09,37l12,20.79a26,26,0,0,1,43.18,2.78ZM115.92,55h0l5.93,10.27a25.87,25.87,0,0,1,5,6.24l12,20.75a26.2,26.2,0,0,1,16-9.78L133.24,45a10,10,0,0,0-13.66-3.66A10,10,0,0,0,115.92,55ZM76.74,59.15l5.93,10.28.32.29A25.93,25.93,0,0,1,99.71,58.94l-5.65-9.79a10,10,0,0,0-18.32,2.41A9.92,9.92,0,0,0,76.74,59.15ZM193.59,184.57a63.61,63.61,0,0,0-6.4-48.57l-19-32.91a10,10,0,0,0-17.74,9.18L161.87,132A8,8,0,1,1,148,140L113,79.53A10,10,0,0,0,95.63,89.4L120.26,132a8,8,0,1,1-13.85,8L73.84,83.66a10,10,0,1,0-17.32,10l36,62.36a8,8,0,1,1-13.86,8l-20-34.64a10,10,0,0,0-17.32,10l35,60.63a64,64,0,0,0,117.25-15.44Zm13.82-83.08-19-32.91a10,10,0,0,0-17.32,10h0L177,88.83a26.06,26.06,0,0,1,5,6.26l19,32.91a80.13,80.13,0,0,1,10.13,30A63.82,63.82,0,0,0,207.41,101.49Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-bold">Grupo de Oración</h3>
                      <p className="text-base text-black/60 ">
                        Lunes a viernes<br/> 6:30 AM
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="mb-6 text-center text-3xl font-bold">
                  Mensaje Inspirador
                </h2>
                <div className="overflow-hidden rounded-lg border border-primary/20 bg-background-light dark:bg-background-dark/50">
                  <div className="flex flex-col items-stretch lg:flex-row">
                    <div
                      className="w-full bg-cover bg-center lg:w-1/2"
                    ></div>
                    <div className="flex w-full flex-col justify-center gap-4 p-8 lg:w-1/2">
                      <p className="text-2xl font-bold">
                        El Amor Incondicional de Dios
                      </p>
                      <p className="text-base text-black/60 ">
                        Descubre el poder transformador del amor de Dios en tu
                        vida. Un mensaje de esperanza y renovación para todos.
                      </p>
                      <div className="mt-2 border-gray-900 border w-fit rounded-full">
                        <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden bg-primary px-6 text-base font-bold text-[#242424] transition-opacity hover:opacity-80 ">
                          <span className="truncate">Leer Más</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="mb-6 text-center text-3xl font-bold">
                  Información de Contacto
                </h2>
                <div className="rounded-lg border border-primary/20 bg-background-light p-6 dark:bg-background-dark/50">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-primary">
                        Dirección
                      </p>
                      <p className="text-base">
                        Entre Av. 9 de Julio y Juan Ramón Vidal
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-primary">Teléfono</p>
                      <p className="text-base">+1 (555) 123-4567</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-primary">
                        Correo Electrónico
                      </p>
                      <p className="text-base">info@iglesiadelas.com</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <footer className="border-t border-primary/20 bg-background-light py-8 text-center dark:bg-background-dark/50 pb-[120px]">
            <div className="mx-auto max-w-5xl px-4 mb-15">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a
                    className="text-base text-black/60 transition-colors hover:text-primary"
                    href="#"
                  >
                    Política de Privacidad
                  </a>
                  <a
                    className="text-base text-black/60 transition-colors hover:text-primary"
                    href="#"
                  >
                    Términos de Servicio
                  </a>
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    className="text-black/60 transition-colors hover:text-primary"
                    href="https://www.facebook.com/centrocristianovidaesquina?locale=es_LA"
                  >
                    <svg
                      fill="currentColor"
                      height="24px"
                      viewBox="0 0 256 256"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </a>
                  
                  <a
                    className="text-black/60 transition-colors hover:text-primary"
                    href="https://www.instagram.com/centrocristianoesquina/"
                  >
                    <svg
                      fill="currentColor"
                      height="24px"
                      viewBox="0 0 256 256"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="mt-6 text-base text-black/60">
                © 2025 Iglesia Centro Cristiano Esquina. Todos los derechos reservados.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
