const formEL = document.getElementById("color-picker-form")

// ------------------- grab form data -------------------------------

formEL.addEventListener("submit", event =>{
    event.preventDefault()
    console.log("Sumbit button clicked")
    const ourFormData = new FormData(event.target)
    const color = ourFormData.get("color")
    const colorScheme = ourFormData.get("colorScheme")
    console.log(`Form color data: ${color} ${colorScheme}`) 
})