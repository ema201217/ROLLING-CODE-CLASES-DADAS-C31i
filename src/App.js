import { useState } from "react";
import { CounterV4 } from "./components/CounterV4";
import { Header } from "./components/Header";

export const App = () => {
  const [mode, setMode] = useState("light")
  const [checked,setChecked] = useState(false)

  const toggleDarkMode = ({target}) => {
    setMode(target.checked ? "dark" : "light" )
    setChecked(target.checked)
  }

  return (
    <div className="">
      <Header modeActive={mode} onDarkMode={toggleDarkMode} checked={checked}/>

      <CounterV4 />
    </div>
  );
}