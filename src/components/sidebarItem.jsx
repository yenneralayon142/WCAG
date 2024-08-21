import React from "react";
import { SvgIcon } from "@progress/kendo-react-common";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import * as icons from "@progress/kendo-svg-icons";
import { useAccessibilityContext } from "../contexts/accesibilityContext";

export default function SidebarItem(props) {
    const { settings, updateSettings, defaultSettings } = useAccessibilityContext();

    const { text, icon, id, hasIndex, options, optionName } = props;

    return (
        <BadgeContainer>
            <article className={`sidebar__item ${ settings[optionName] != defaultSettings[optionName] && 'sidebar__item--active'}`} id={id} >
                {(settings[optionName] != defaultSettings[optionName] || settings[optionName] == true) && (
                    <Badge themeColor="secondary" size="small">
                        <SvgIcon icon={icons.checkIcon} />
                    </Badge>
                )}
                <span className="sidebar__item__icon material-symbols-outlined">{icon}</span>
                <p>{text}</p>
                <div style={{display: 'flex', justifyContent: 'flex-end', gap: '5px'}}>
                    {hasIndex && settings[optionName] != defaultSettings[optionName] && (
                        options.map((option, index) => (
                            <i  
                                key={index}
                                className={`sidebar__item__index ${option == settings[optionName] ? 'sidebar__item__index--active' : ''}`}
                            >
                            </i>
                        ))
                    )}
                </div>
            </article>
        </BadgeContainer>
    );
}
