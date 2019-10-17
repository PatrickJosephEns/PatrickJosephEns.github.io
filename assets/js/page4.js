//contact section
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
        comments.innerHTML = `<p>Thank you  ${name} your message has been sent!</p>` + comments.innerHTML;
        }
        
    };
    form.addEventListener('submit', sendPhp);