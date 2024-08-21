import * as React from "react";
import {
  InputClearValue,
  InputSeparator,
  TextBox,
} from "@progress/kendo-react-inputs";
import { SvgIcon } from "@progress/kendo-react-common";
import { cancelIcon } from "@progress/kendo-svg-icons";
import { useSearch } from './Hooks/useSearch' 


const EMPTY_VALUE = "";

export default function SearchUrl() {
    const [sort,setSort] = useState(false)
    const { search , updateSearch, error} = useSearch()
    const { movies, loading , getMovies} = useMovies({ search,sort })
    const [value, setValue] = React.useState(EMPTY_VALUE);
    const handleChange = React.useCallback((event) => {
      setValue(event.target.value);
    }, []);
    const handleClear = React.useCallback(() => {
      setValue(EMPTY_VALUE);
    }, []);
    return (
        <div className="profile-demo card-container">
        <div className="k-card custom-card">
            <div className="card-column">
              <div className="avatar-title-container">
                <div className="k-skeleton skeleton-avatar" />
                <h4 className="k-h4">¿La pagina es accesible?</h4>
              </div>
            <div className="avatar-title-container">
                <p>
                     A continuación, encontrará un campo donde podrá ingresar una URL. Esto le permitirá verificar si la página web es accesible o no. Además, recibirá un conjunto de recomendaciones para mejorar la accesibilidad de la web y aplicar mejores prácticas de desarrollo.
                </p>
            </div>
              <div className="component-container">
                <form className="k-form" onSubmit={(e) => e.preventDefault()}>
                  <fieldset>
                    <div>Ingrese su URL</div>
                    <TextBox
                      value={value}
                      onChange={handleChange}
                      placeholder="John Smith"
                      suffix={() => (
                        <React.Fragment>
                          {value !== EMPTY_VALUE && (
                            <InputClearValue onClick={handleClear}>
                              <SvgIcon icon={cancelIcon} />
                            </InputClearValue>
                          )}
                          <InputSeparator />
                        </React.Fragment>
                      )}
                    />
                  </fieldset>
                </form>
                <button className="component-container button-submit">
                    Buscar
                </button>
              </div>
              <div className="skeleton-container top">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large" />
              </div>
              <div className="skeleton-container bottom">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large-double" />
              </div>
              <div className="skeleton-container bottom">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large-double" />
              </div>
              <div className="skeleton-container bottom">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large-double" />
              </div>
              <div className="skeleton-container bottom">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large-double" />
              </div>
              <div className="skeleton-container bottom">
                <div className="k-skeleton skeleton-box-small" />
                <div className="k-skeleton skeleton-box-large-double" />
              </div>
            </div>
          </div>
        </div>
    )
}