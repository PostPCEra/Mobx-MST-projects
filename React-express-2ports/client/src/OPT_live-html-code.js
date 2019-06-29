import React, { Component } from "react"

export default class OPT extends Component {

  setTexttoEditor () {
        // it gives error without 'window.'
        window.optLiveFrontend.pyInputAceEditor.setValue('omnamosri = 999 \na = 5');
        alert(' in side OPT_live-html-code.js  file'); 
        //console.log(' in OPT');
    }


    render() {

      
        return (
            <header>
                <h1>todos 333</h1>

        <div id="pyInputPane">
          <div id="codeInputWarnings">Write code in
            <select id="pythonVersionSelector">
              <option value="2">Python 2.7</option>
              <option value="3" selected>Python 3.6</option>
              <option value="js">JavaScript ES6</option>
            </select>

            <div id="like_button_container"></div>

        
          </div>
          <div id="someoneIsTypingDiv">Someone is typing ...</div>

          <div id="asr-added"> 
            <input type="button" value="SetToEditor"
            onClick={this.setTexttoEditor}/>
          </div>

          <div id="autopane">
          </div>
          <div id="codeInputPane"></div>


       
        </div>
        
      
        <div id="pyOutputPane"/>
    
            </header>
        )
    }
}
