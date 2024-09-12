import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import {  AppBar, AppBarSection, AppBarSpacer, Menu, MenuItem } from "@progress/kendo-react-layout";
import { Popup } from "@progress/kendo-react-popup";
import { bellIcon, menuIcon } from "@progress/kendo-svg-icons";

export default function Header() {
    // Menu
    const menuItems = [
        {
            text: "Inicio",
            route: "/",
        },
        {
            text: "WCAG",
            route: "/wcag",
            items: [
                {
                    text: "Quienes somos",
                    route: "/team",
                }
            ]
        },
        {
            text: "Busqueda Url",
            route:"/searchUrl",
        },
        {
            text: "Documentación",
            route: "/docs",
        }
    ];

    // Boton responsive
    const [show, setShow] = React.useState(false);
    const anchor = React.useRef(null);
    const handleClick = () => {
      setShow(!show);
    };

    // Funcion para redireccionar
    const navigate = useNavigate();
    const onSelect = (event) => {
        navigate(event.item.route);
    };

    return (
        <AppBar className="header" positionMode="sticky" themeColor="light">
            <nav className="header__container">
                {/* Logo */}
                <AppBarSection>
                    <Link to="/" className="header__brand">
                        <div className="header__logo">
                            <img src="/logo-sena.png" alt="Logo sena" className="image"/>
                        </div>
                    </Link>
                </AppBarSection>

                <AppBarSpacer />

                {/* Menú */}
                <AppBarSection >
                    <div id="header__desktop" className="header__desktop">
                        <Menu onSelect={onSelect} items={menuItems} />
                    </div>
                </AppBarSection>

                {/* Menu Responsive */}
                <AppBarSection>
                    <div ref={anchor} id="header__mobile">
                        <Button
                        fillMode="flat"
                        onClick={handleClick}
                        type="button"
                        svgIcon={menuIcon}
                        />
                    </div>
                    {show && (
                        <Popup
                        anchor={anchor.current}
                        show={show}
                        style={{
                            marginLeft: -10,
                            zIndex: 1000,
                        }}
                        >
                            <Menu  
                            items={menuItems}
                            onSelect={onSelect}
                            vertical={true}
                            style={{
                                display: "inline-block"
                            }}
                            />
                        </Popup>
                    )}
                </AppBarSection>

            </nav>
        </AppBar>        
    );
}
