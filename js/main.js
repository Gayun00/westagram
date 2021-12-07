const $commentInput = document.querySelector('.comment__input--text');
const $commentButton = document.querySelector('.comment__input--button');
const $commentContainer = document.querySelector('.comments');
const $comments = document.querySelector('comment');
const $feedButtons = document.querySelector('.feed__button');
const $deleteButton = document.querySelector('.comment__delete-button');

$commentButton.addEventListener('click', addComment);
$commentContainer.addEventListener('click', deleteComment);
$feedButtons.addEventListener('click', handleLike);

function addComment(e) {
    e.preventDefault();
    const commentVal = $commentInput.value;
    const newCommentEl = document.createElement('ul');
    newCommentEl.classList.add('comment');
    newCommentEl.innerHTML = `
        <span class="comment_item">
            <span class="comment__id">canon_mj</span>
            <span class="comment__text">${commentVal}</span>
        </span>
        <button class="comment__delete-button">
            <i class="fas fa-times"></i>
        </button>
    `
    $commentContainer.appendChild(newCommentEl);
    $commentInput.value = '';
}

function deleteComment(e) {
    const target = e.target;
    if(target.className !== 'fas fa-times') return;
    console.log($comments)
}
console.log($comments)

function handleLike(e) {
    const target = e.target;

    if(!target.className.includes('fa-heart')) {
        return;
    } else {
        target.classList.toggle('far');
        target.classList.toggle('fas');
        target.classList.toggle('liked');
    }
}
