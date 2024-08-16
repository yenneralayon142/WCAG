export default function AccessibilityControls () {
  return(
      <aside className="sidebar">
        <form action="" className="sidebar__form">
            <input type="checkbox" id="open-menu"/>
            <label htmlFor="open-menu" className="material-symbols-outlined close-button">close</label>
            <label htmlFor="open-menu" className="material-symbols-outlined open-button">double_arrow</label>
        </form>
        <h1 className="sidebar__tittle">
          Menú de Accesibilidad 
        </h1>
        <nav className="sidebar__nav">
            <ul>
              <div className="sidebar__container">
                    <li className="sidebar__item">
                        <a href="">
                        <span className="material-symbols-outlined">text_fields</span><br />
                        Tamaño texto
                        </a>
                    </li>
                    <li className="sidebar__item">
                          <a href="">
                              <span className="material-symbols-outlined">contrast</span>
                              Contraste
                          </a>          
                    </li>
              </div>
              <div className="sidebar__container">
                  <li className="sidebar__item">
                        <a href="">
                            <span className="material-symbols-outlined">text_to_speech</span>
                            Lector Pantalla
                        </a>
                    </li>
                    <li className="sidebar__item">
                        <a href="#">
                          <span className="material-symbols-outlined">web_traffic</span>
                          Cursor
                        </a>
                    </li>
              </div>  
            </ul>
        </nav>
        <div className="sidebar_profile">
                  <ul>
                     <li className="sidebar__item  button-end">
                          <span class="material-symbols-outlined">restart_alt</span>
                          <a href="#">Restablecer configuraciones</a>
                     </li>
                  </ul>
        </div>
    </aside>
  )
}

