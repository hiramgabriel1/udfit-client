function Header() {
  return (
    // fragments
    <>
      <header>
        <nav className="container flex items-center justify-between">
          <div className="w-68 py-3 flex items-center">
            <img
              // src={logo}
              alt=""
              className="w-10 h-10 sm:w-16 sm:h-16"
            />
            <div className="px-5">
              <ul className="text-color-secondary hidden lg:flex items-center space-x-6">
                <li>
                  <a
                    href="#About"
                    className="hover:text-color-orange-focus ease-in duration-200"
                  >
                    ¿Que es udfit?
                  </a>
                </li>
                <li className="hover:text-color-orange-focus ease-in duration-200">
                  <a href="#Function">¿Como funciona?</a>
                </li>
                <li className="hover:text-color-orange-focus ease-in duration-200">
                  <a href="Aply">¿Como aplicar?</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <a
              href="/auth/login"
              className="text-xs md:text-base px-1 py-1 md:px-4 md:py-3 border border-color-secondary rounded-3xl capitalize text-color-secondary hover:border-color-orange-focus hover:text-black ease-in duration-200"
            >
              Iniciar Sesion
            </a>
            <a
              href="/auth/register"
              className="px-2 py-1 md:px-6 md:py-3 text-xs md:text-base border rounded-3xl capitalize text-white bg-color-orange-focus hover:opacity-80 ease-in duration-200"
            >
              Registrarse
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
