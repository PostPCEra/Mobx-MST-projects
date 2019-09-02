import React from 'react'
import Link from 'next/link'
import { Scene, SceneItem } from "react-scenejs";

class Scene1 extends React.Component {

    render() {

        let keyframes = {
            ".circles .circle": (i: number) => ({
                0: {
                "border-width": "150px",
                "opacity": 1,
                "transform": "translate(-50%, -50%) scale(0)",
                },
                1.5: {
                "border-width": "0px",
                "opacity": 0.3,
                "transform": "scale(0.7)",
                },
                options: {
                delay: i * 0.4,
                },
            }),
        };

      return (<Scene
        keyframes={this.keyframes}
        easing="ease-in-out"
        fillMode="forwards"
        direcition="normal"
        iterationCount={1}
        playSpeed={1}
        delay={0}
        time={0}
        css={false}
        autoplay={false}
        ready={true}
        onPlay={e => { console.log(e); }}
        onPaused={e => { console.log(e); }}
        onAnimate={e => { console.log(e); }}
        onTimeUpdate={e => { console.log(e); }}
        onIteration={e => { console.log(e); }}
        onEnded={e => { console.log(e); }}
    >
        <div className="circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        </div>
    </Scene>);
    }

}

export default Scene1