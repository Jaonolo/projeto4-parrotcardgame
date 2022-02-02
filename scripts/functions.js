const flipCard = (card) => {
    if(card.classList.contains('flipped'))
        return 0
    card.classList.add('flipped')

    roundCount++
    document.querySelector('#counter').innerText = roundCount
    
    console.log(flipped)
    if(flipped)
    {
        if(flipped.value === card.value)
            addPoint()
        else
            setTimeout((a) => unflipCards(a), 1000, [flipped, card])
        flipped = null
    }
    else
    {
        flipped = card
    }
}

const unflipCards = (cards) => {
    cards[0].classList.remove('flipped')
    cards[1].classList.remove('flipped')
}

const addPoint = () => {
    if(++points === cardCount)
        gameFinish()
}

const gameInitialize = () => {
    if(currentPlaying !== false)
        return 1
    currentPlaying = true

    const gameContainer = document.querySelector('section')
    do {
        cardCount = parseInt(prompt('Numero'))
    } while (testInput(cardCount))

    let array = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
    array = array.slice(0, cardCount)
    array = array.concat(array)
    array = array.sort(() => {return Math.random() - 0.5})
    
    for(let i = 0; i < cardCount*2; i++){
        let card = document.createElement('button')
        card.classList.add('card')
        card.setAttribute('value', array[i])
        card.addEventListener('click', (e) => flipCard(e.currentTarget))

        let back = document.createElement('img')
        back.classList.add('back')
        back.setAttribute('src',`public/${array[i]}parrot.gif`)

        let front = document.createElement('img')
        front.setAttribute('src', 'public/front.png')

        card.appendChild(front)
        card.appendChild(back)
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('#counter').innerText = roundCount

    points = 0
}

const gameFinish = () => {
    currentPlaying = false
    alert("é nois")
}

const testInput = (number) => {
    // return !(number % 2 !== 0 && number >= 4 && number <= 14)
    return !(number >= 2 && number <=7) 
}