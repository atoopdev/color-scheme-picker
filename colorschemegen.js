const formEL = document.getElementById("color-picker-form")

// ------------------- grab form data -------------------------------

formEL.addEventListener("submit", event =>{
    event.preventDefault()
    console.log("Sumbit button clicked")
    const ourFormData = new FormData(event.target)
    let colorChoice = ourFormData.get("color")
    colorChoice = colorChoice.substring(1)
    const colorSchemeChoice = ourFormData.get("colorScheme")
    console.log(`Form color data: ${colorChoice} ${colorSchemeChoice}`) 
    getColorScheme(colorChoice, colorSchemeChoice)
})

// -------------------------- pull color scheme data ----------------------

function getColorScheme(color, mode){
    console.log(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`, {method:"GET"})
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        // console.log("Colors: ", data.colors[0].hex.value)
        let colorArray = []
        for(let i=0;i<data.colors.length; i++){
            console.log("Iterate colors: ", data.colors[i].hex.value)
            colorArray.push(data.colors[i].hex.value)
        }
        console.log(colorArray)
        renderColors(colorArray)
    })
}

// --------------------------- render colors to screen ---------------------------------

function renderColors(colorData){
    let htmlColorList = ""
document.getElementById("color1").style.backgroundColor = colorData[0]
document.getElementById("color1").innerText=colorData[0]
document.getElementById("color2").style.backgroundColor = colorData[1]
document.getElementById("color2").innerText=colorData[1]
document.getElementById("color3").style.backgroundColor = colorData[2]
document.getElementById("color3").innerText=colorData[2]
document.getElementById("color4").style.backgroundColor = colorData[3]
document.getElementById("color4").innerText=colorData[3]
document.getElementById("color5").style.backgroundColor = colorData[4]
document.getElementById("color5").innerText=colorData[4]
for(let i=0;i<colorData.length; i++){
    htmlColorList += `<p>${colorData[i]}</p>`
}
document.getElementById("colors-id").innerHTML = htmlColorList
}