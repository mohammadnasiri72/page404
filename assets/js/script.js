var main = document.querySelector(".main")

window.addEventListener("mousemove" , function(e){
    var x = e.clientX/10
    var y = e.clientY/10
    main.style.backgroundPositionX = x + "px"
    main.style.backgroundPositionY = y + "px"
})
