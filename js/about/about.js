const exitBtn = document.getElementById("exit")
const closeBtn = document.getElementById("close")
exitBtn.addEventListener("click", function () {
    window.location="/"
})

closeBtn.addEventListener("click", function () {
    window.location="/"
})

function renderDataFor15(datas) {
    const cardsContainer = document.querySelector(".cards")
    let s = 0
    datas.forEach( data => {
        const divCard = document.createElement("div")
        divCard.classList.add("card")
        if(data.title == "Тир ‘20 Пуль’") {
            const b = document.createElement("b")
            const image = document.createElement("img")
            const div = document.createElement("div")
            const age = document.createElement("p")

            data.price.forEach(prices => {
                const span = document.createElement("span")
                if(prices == "10 пуль - 10.000") {
                    span.innerHTML = "Цена: " + prices
                }
                else {
                    span.innerHTML = prices
                }

                div.appendChild(span)
            })

            b.innerHTML = data.title;
            image.src = data.image
            age.innerHTML = "Возраст: " + data.age

            divCard.append(b, image, div, age)
        }
        
        else {
            const b = document.createElement("b")
            const image = document.createElement("img")
            const price = document.createElement("p")
            const age = document.createElement("p")
            const time = document.createElement("p")
            
            b.innerHTML = data.title
            image.src = data.image
            price.innerHTML ="Цена:  " + data.price
            age.innerHTML = "Возраст: " + data.age
            time.innerHTML ="Время, минут: " +  data.time
            
            divCard.append(b, image, price, age, time)
        }
        cardsContainer.appendChild(divCard)
    })
}

renderDataFor15(for15Data)

function renderDataFor4(datas) {
    const cardsContainer = document.querySelector(".cardsContainer")
    datas.forEach(function(data) {
        const card = document.createElement("div")
        const b = document.createElement("b")
        const price = document.createElement("p")
        const age = document.createElement("p")
        const time = document.createElement("p")

        card.classList.add("card")

        b.innerHTML = data.title
        price.innerHTML = "Цена:  " + data.price
        age.innerHTML = "Возраст: " + data.age
        time.innerHTML = "Время, минут: " + data.time


        card.append(b, price, age, time)

        cardsContainer.appendChild(card)
    })
}

renderDataFor4(for4Data)