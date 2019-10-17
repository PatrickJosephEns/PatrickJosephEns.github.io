const items = document.getElementById('items');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'surfboards.json', true);
xhr.onload = () => {
    if (xhr.status === 200){
        const array = JSON.parse(xhr.responseText);

        array.forEach(p => {
            items.innerHTML = items.innerHTML + `<div class = "outer">
            <div class = "img">
            <img src="${p.image}" height = "400"> </div>
            <div class = "text">
            <p class = "model"> ${p.model} </p>
            <p class = "brand">By: ${p.brand} </p>   
            <p class = "price"> ${p.price} </p>
            <p class = "des"> About the board: <br>${p.descrip} </p>                 
            </div>
            </div>
            <br>`
        })
    }
    else if (xhr.status === 400){
        console.log("File not found");
    }
}

xhr.onerror = () =>{
    console.log(`Current Load State ${xhr.readyState}`);
}

xhr.send();

//comment section
const form = document.getElementById('comment-form');
const comments = document.getElementById('post');

    const sendPhp = (e) => {
        
        e.preventDefault();
        const name = document.getElementById('name-data').value;
        const comment = document.getElementById('comment-data').value;
        const time = document.lastModified;
        console.log(name)

        if (name.length <= 0){
            alert("Please enter a name");
        }
        else if (comment.length <= 0){
            alert("Please enter a comment");
        }
        else{
        comments.innerHTML = `<div class="comment"> <p>${name}</p> <p>${time}</p><br><p>${comment}</p><br></div> <br>` + comments.innerHTML;
        }
        
    };
    form.addEventListener('submit', sendPhp);
