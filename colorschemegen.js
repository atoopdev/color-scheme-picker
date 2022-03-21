const formEL = document.getElementById("color-picker-form")
let colorSelection = {}
// ------------------- grab form data -------------------------------

formEL.addEventListener("submit", event =>{
    event.preventDefault()
    console.log("Sumbit button clicked")
    const ourFormData = new FormData(event.target)
    const colorChoice = ourFormData.get("color")
    const colorSchemeChoice = ourFormData.get("colorScheme")
    colorSelection = {
        color: colorChoice,
        colorScheme: colorSchemeChoice
    }
    console.log(`Form color data: ${colorSelection.color} ${colorSelection.colorScheme}`) 
})