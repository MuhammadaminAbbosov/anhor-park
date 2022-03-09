

foodcord.addEventListener("click", function () {
    section4.classList.toggle("show")
    cinemaContainer.classList.remove("show")
    cartingContainer.classList.remove("show")
    cinema.classList.remove("active")
    carting.classList.remove("active")
    foodcord.classList.toggle("active")
})

cinema.addEventListener("click", function () {
    cinemaContainer.classList.toggle("show")
    section4.classList.remove("show")
    cartingContainer.classList.remove("show")
    cinema.classList.toggle("active")
    carting.classList.remove("active")
    foodcord.classList.remove("active")

})

carting.addEventListener("click", function () {
    cartingContainer.classList.toggle("show")
    cinemaContainer.classList.remove("show")
    section4.classList.remove("show")
    carting.classList.toggle("active")
    cinema.classList.remove("active")
    foodcord.classList.remove("active")

})

menuIcon.addEventListener("click", function () {
    console.log(navigationBar)
    navigationBar.classList.toggle("show")
})