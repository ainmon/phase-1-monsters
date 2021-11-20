document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/monsters/?_limit=50')
        .then(res => res.json())
        .then(res => res.map(m => monsterData(m)))
})


function monsterData(monster){
    let monsterDiv = document.getElementById('monster-container')
    let li = document.createElement('li')

    let name = monster.name + ''
    let age = monster.age + ''
    let description = monster.description + ''

    monsterDiv.appendChild(li)
    li.append(name, age, description)

}