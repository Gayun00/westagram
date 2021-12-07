const $commentInput = document.querySelector('.comment__input--text');
const $commentButton = document.querySelector('.comment__input--button');
const $comments = document.querySelector('.comments');
$commentButton.addEventListener('click', addComment);
$commentButton.addEventListener('')

function addComment(e) {
    e.preventDefault();
    const commentVal = $commentInput.value;
    const newCommentEl = document.createElement('ul');
    newCommentEl.classList.add('comment');
    newCommentEl.innerHTML = `
        <span class="comment__id">canon_mj</span>
        <span class="comment__text">${commentVal}</span>
    `
    $comments.appendChild(newCommentEl);
}

