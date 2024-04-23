import { useState } from "react";
import "./nav.css";
import { DarkModeSvg } from "./svg/Moon";
import { LightModeSvg } from "./svg/Sun";
import { SearchSvg } from "./svg/Search";
export function NavMain() {
    const [ModeSwitch, setModeSwitch] = useState(true)
    const toggleSwitch = ()=>{
        setModeSwitch(!ModeSwitch)
    }
    let ModeState = ModeSwitch ? `Dark` : `Light`
  return (
    <header>
      <nav>
        <div className="NavMenuBigContainer">
          <div className="NavMenuContainer">
            <ul className="NavMenu">
              <li className="NavMenuItem">
                <button className={`NavMenuItemButton NavMenuItemButton${ModeState}`}>POKEDEX</button>
              </li>
              <li className="NavMenuItem">
                <button className={`NavMenuItemButton NavMenuItemButton${ModeState}`}>ITEMS</button>
              </li>
              <li className="NavMenuItem">
                <button className={`NavMenuItemButton NavMenuItemButton${ModeState}`}>SETTINGS</button>
              </li>
              <li className="NavMenuItem NavMenuMode">
              <button className={ModeSwitch ? `DarkModeActive NavMenuItemButton` : `LightModeActive NavMenuItemButton   `} onClick={toggleSwitch}>
                <LightModeSvg Mode={ModeSwitch ? `Dark` : `Light`}/>
                <DarkModeSvg Mode={ModeSwitch ? `Dark` : `Light`}/>
              </button>
              </li>
            </ul>
            
          </div>
        </div>
        <div className="NavSearchContainer">
            <form className="NavSearch">
                <input className="NavSearchInput"></input>
                <button className={ModeSwitch ? `NavSearchButton NavSearchButton${ModeState}` : `NavSearchButton NavSearchButton${ModeState}`}>
                    <SearchSvg Mode={ModeSwitch ? `Dark` : `Light`}/>
                </button>
            </form>
        </div>
      </nav>
    </header>
  );
}
