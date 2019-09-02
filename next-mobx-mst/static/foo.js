function outsidejs() {

    alert('this is from foo.js external jS file VERSION 3333');
    playscene();
}

function playscene() {

    new Scene({
        ".color1 .rect": {
        "background-color": ["#000", "#ff5555"],
        },
        ".color2 .rect": {
        "background-color": ["#000", "rgba(55, 150, 150, 1)"],
        },
        ".color3 .rect": {
        "background-color": ["#000", "hsla(50, 100%, 67%, 1)"],
        },
    }, {
        duration: 2,
        direction: "alternate",
        iterationCount: "infinite",
        selector: true,
    }).play();

}