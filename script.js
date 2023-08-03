var id = 0
function add(){
    //for style
    positionP = "absolute"
    topP = "21%"
    leftP = "22%"
    fontSizeP = "3vmin"
    fontFmlyP = "monospace"
    let iV = document.getElementById("i1").value;
        if(iV != "")
        {
            id += 1
            if(id == 1){
                const x = document.createElement("p");
                x.style.position = positionP
                x.style.top = topP
                x.style.left = leftP
                x.style.fontSize = fontSizeP
                x.style.fontFamily = fontFmlyP
                x.id = "p2";
                document.body.appendChild(x);
                console.log("worked")
                createCheckBox("24%")
                document.getElementById("p2").innerHTML = `[${id}]` + " " + iV;  
            }
            else if(id == 2){
                const k = document.createElement("p");
                k.id = "p3"
                document.body.appendChild(k)
                k.style.position = positionP
                k.style.top = "28%"
                k.style.left = leftP
                k.style.fontFamily = fontFmlyP
                k.style.fontSize = fontSizeP
                createCheckBox("31%")
                document.getElementById("p3").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 3){
                const o = document.createElement("p");
                o.id = "p4"
                document.body.appendChild(o)
                o.style.position = positionP
                o.style.top = "35%"
                o.style.left = leftP
                o.style.fontFamily = fontFmlyP
                o.style.fontSize = fontSizeP
                createCheckBox("38%")
                document.getElementById("p4").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 4){
                const p = document.createElement("p");
                p.id = "p5"
                document.body.appendChild(p)
                p.style.position = positionP
                p.style.top = "42%"
                p.style.left = leftP
                p.style.fontFamily = fontFmlyP
                p.style.fontSize = fontSizeP
                createCheckBox("45%")
                document.getElementById("p5").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 5){
                const z = document.createElement("p");
                z.id = "p6"
                document.body.appendChild(z)
                z.style.position = positionP
                z.style.top = "49%"
                z.style.left = leftP
                z.style.fontFamily = fontFmlyP
                z.style.fontSize = fontSizeP
                createCheckBox("52%")
                document.getElementById("p6").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 6){
                const f = document.createElement("p");
                f.id = "p7"
                document.body.appendChild(f)
                f.style.position = positionP
                f.style.top = "56%"
                f.style.left = leftP
                f.style.fontFamily = fontFmlyP
                f.style.fontSize = fontSizeP
                createCheckBox("59%")
                document.getElementById("p7").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 7){
                const r = document.createElement("p");
                r.id = "p8"
                document.body.appendChild(r)
                r.style.position = positionP
                r.style.top = "63%"
                r.style.left = leftP
                r.style.fontFamily = fontFmlyP
                r.style.fontSize = fontSizeP
                createCheckBox("66%")
                document.getElementById("p8").innerHTML = `[${id}]` + " " + iV;
            }
            else if(id == 8){
                const h = document.createElement("p");
                h.id = "p9"
                document.body.appendChild(h)
                h.style.position = positionP
                h.style.top = "70%"
                h.style.left = leftP
                h.style.fontFamily = fontFmlyP
                h.style.fontSize = fontSizeP
                createCheckBox("73%")
                document.getElementById("p9").innerHTML = `[${id}]` + " " + iV;
            }
        }
    function createCheckBox(l){
        const y = document.createElement("input")
        y.id = "checkbox1"
        y.type = "checkbox"
        y.style.position = positionP
        y.style.top = l
        y.style.left = "74%"
        y.style.width = "5%"
        y.style.height = "5%"
        document.body.appendChild(y)
        y.style.accentColor = "black"
    }
}
function reset(){
    window.location.reload()
}