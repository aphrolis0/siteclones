// script.js
function handleLike(button) {
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
    } else {
        button.classList.add('liked');
        const siblingButton = button.nextElementSibling;
        if (siblingButton.classList.contains('disliked')) {
            siblingButton.classList.remove('disliked');
        }
    }
}

function handleDislike(button) {
    if (button.classList.contains('disliked')) {
        button.classList.remove('disliked');
    } else {
        button.classList.add('disliked');
        const siblingButton = button.previousElementSibling;
        if (siblingButton.classList.contains('liked')) {
            siblingButton.classList.remove('liked');
        }
    }
}

// JavaScript in script.js file
function addComment(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value of the new comment from the textarea
    const newCommentContent = document.getElementById('newComment').value;

    if (newCommentContent.trim() !== '') {
        // Create a new comment element
        const newCommentElement = document.createElement('div');
        newCommentElement.classList.add('comment');

        // Set the content of the new comment
        newCommentElement.innerHTML = `
            <p class="comment-content">${newCommentContent}</p>
            <small>Commented by You</small>
            <div class="comment-actions">
                <button class="like" onclick="handleLike(this)">Like</button>
                <button class="dislike" onclick="handleDislike(this)">Dislike</button>
            </div>
        `;

        // Append the new comment to the comments section
        const commentsSection = document.querySelector('.comments-section');
        commentsSection.appendChild(newCommentElement);

        // Clear the textarea after adding the comment
        document.getElementById('newComment').value = '';
    } else {
        alert('Please enter a valid comment.'); // Display an alert if the comment is empty
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
