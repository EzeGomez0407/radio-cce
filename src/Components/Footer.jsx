

export default function Footer(){
    return <>
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
    </>
}