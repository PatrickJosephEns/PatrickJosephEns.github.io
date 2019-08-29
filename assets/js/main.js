//josn checkpoint
const ajaxTxtBtn = document.getElementById('ajax-txt-btn')
const ajaxJsonBtn = document.getElementById('ajax-json-btn')

const xhr = new XMLHttpRequest()

const loadTxt = () => {
    xhr.open('GET', 'lorem.txt', true)
    xhr.onload = () => {
        if(xhr.status === 200){
        console.log(xhr.responseText)
        document.getElementById('txt').innerHTML= `<p>${xhr.responseText}</p>`
    }
        else if (xhr.status === 404){
            console.log('File not found.')
        }
    }
    xhr.send()
}

const loadJson = () => {
    xhr.open('GET', 'person.Json', true)
    xhr.onload = () => {
        if(xhr.status === 200){
        console.log(xhr.responseText)
        const person = JSON.parse(xhr.responseText)
        console.log(person)
        person.forEach(p => {
            const{ id, firstName, lastName} = p
            console.log(p.firstName)
            let list = document.getElementById('list')
            list.innerHTML= list.innerHTML + `<li>${p.firstName} ${p.lastName}</li>`
        });
        }
        else if (xhr.status === 404){
            console.log('File not found.')
        }
    }
    xhr.send()
}

const sendPhp = (e) => {
    e.preventDefault()

    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const emailAddress = document.getElementById('email').value
    
    const params = `firstName=${firstName}&lastName=${lastName}&emailAddress=${emailAddress}`
    xhr.open('POST', 'http://kate.ict.op.ac.nz/~orrgl1/server.php', true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.responseText)
            let form = document.getElementById('form')
            document.getElementById('sub').textContent = `${xhr.responseText}`
        }
            else if (xhr.status === 500){
                console.log('Internal Server Erroe')
            }       
    }
    xhr.send(params)
}

document.getElementById('form').addEventListener('submit',sendPhp)
ajaxJsonBtn.addEventListener('click', loadJson)
ajaxTxtBtn.addEventListener('click', loadTxt)


//Comment Section
const showComment = () => {
    const commentVal = document.getElementById('comment-input').value
    document.getElementById('comment-output').innerHTML = `<b>Comment:</b> ${commentVal}`

    var temp = document.lastModified
    document.getElementById('comment-lastmod').innerHTML = `<b>Last Modified</b> ${temp}`

    document.getElementById('comment-postId').innerHTML = `<b>Post Button Id</b> ${
        document.getElementById('comment-data').id
    }`
}
document.getElementById('comment-data')
.addEventListener('click', showComment)

let logKey = document.getElementById('log-key')
const logOutput = e => {
    logKey.textContent += `${e.code}`
}
document.addEventListener('keypress', logOutput)

//To do list add item
function addItem() {
    let item = document.getElementById('todoInput').value
    let text = document.createTextNode(item)
    let newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todoList').appendChild(newItem)
}
 
document.getElementById('todolistButton').addEventListener('click', addItem)

var title = document.getElementById('tit')
title.addEventListener('mouseover', mouseOver)
title.addEventListener('mouseleave', mouseLeave)

function mouseOver(){
    title.style.color = 'pink'
    title.textContent = 'easy'
}

function mouseLeave(){
    title.style.color = 'white'
    title.textContent = 'Checkpoint-4'
}

let oddItem = document.querySelectorAll('tr:nth-child(odd)')
oddItem.forEach(o => {
    o.style.backgroundColor = '#000000'
    o.style.color = '#ffffff'
    o.style.width = '100px'
})