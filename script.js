

// ? ================================== So'rovlar bilan ishlash ===================================

let ul = document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
    console.log(res);
    // return res.text()
    return res.json()
}).then((data)=>{
    render(data);
})

function render(users) {
    console.log(users);
    users.map((item)=>{
        let li = document.createElement('li')
        li.innerHTML = `${item.name}`
        ul.append(li)
    })
}

// fetch('https://kun.uz').then((res)=>{
//     console.log(res);
//     // return res.text()
//     return res.json()
// }).then((data)=>{
//     render(data);
// })