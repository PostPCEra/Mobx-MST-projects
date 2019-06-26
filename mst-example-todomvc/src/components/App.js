import React from "react"
import Header from "../components/Header"
import MainSection from "../components/MainSection"
import OPT from "./OPT_live-html-code"

const App = ({ store }) => (
    <div>
       
        {/* comment these, so we can test OPT .....

        <Header addTodo={store.addTodo} />
        <MainSection store={store} />

        */}

         <OPT/> 
    

    </div>
)

export default App
