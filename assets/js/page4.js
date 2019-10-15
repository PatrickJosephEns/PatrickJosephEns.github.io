//comment section
const form = document.getElementById('comment-form');
const comments = document.getElementById('post');

    const sendPhp = (e) => {
        
        e.preventDefault();
        const name = document.getElementById('name-data').value;
        const comment = document.getElementById('comment-data').value;
        const email = document.getElementById('email-data').value;
        const time = document.lastModified;
        console.log(name)

        if (name.length <= 0){
            alert("Please enter a name");
        }
        else if (comment.length <= 0){
            alert("Please enter a comment");
        }
        else{
        comments.innerHTML = `<div class="comment"> <p>${name}</p><p>${email}</p><p>${time}</p><br><p>${comment}</p><br></div> <br>` + comments.innerHTML;
        }
        
    };
    form.addEventListener('submit', sendPhp);