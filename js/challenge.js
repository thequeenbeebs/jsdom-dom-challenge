let counter = Number.parseInt(document.querySelector('#counter').innerText)
let allLikes = {}
let beginTimer = setInterval(beginCounter, 1000)


//starting counter
function beginCounter() {
    counter++; 
    document.querySelector('#counter').innerText = counter
}

document.addEventListener('DOMContentLoaded', () => {beginTimer});

//plus button
document.querySelector('#plus').addEventListener('click', () => { 
    counter++; 
    document.querySelector('#counter').innerText = counter 
})

//minus button
document.querySelector('#minus').addEventListener('click', () => { 
    counter--; 
    document.querySelector('#counter').innerText = counter 
})

//heart button
document.querySelector('#heart').addEventListener('click', () => {
    if (allLikes[`${counter}`] >= 1) {
        let currentLike = document.getElementById(`number-${counter}`)
        currentLike.count++
        currentLike.innerText = `${currentLike["data-num"]} has been liked ${currentLike.count} times`
        allLikes[`${counter}`]++
    } else {
        let like = document.createElement('li')
        like["data-num"] = counter
        like.id = `number-${counter}`
        like.count = 1
        like.innerText = `${like["data-num"]} has been liked ${like.count} time`
        let ul = document.querySelector('.likes')
        ul.appendChild(like)
        allLikes[`${counter}`] = 1
    }
})

//pause button
let pause = document.querySelector('#pause')
pause.addEventListener('click', pauseTimer)

function pauseTimer() {
    if (pause.innerText === "pause") {
        clearInterval(beginTimer)
        pause.innerText = "resume"
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        isRunning = false
    } else if (pause.innerText === "resume") {
        beginTimer = setInterval(beginCounter, 1000)
        pause.innerText = "pause"
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
    }
}

//adding a comment
document.querySelector("#comment-form").addEventListener('submit', (event) => {
    event.preventDefault()
    let comment = document.createElement('p')
    comment.textContent = event.target["comment-input"].value
    let commentArea = document.querySelector("#list")
    commentArea.appendChild(comment)
})