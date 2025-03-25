const addCommentBtn = document.querySelector(".comments__form-btn")
const commentInputName = document.querySelector(".comments__form-input--name")
const commentInputMail = document.querySelector(".comments__form-input--mail")
const commentText = document.querySelector(".comments__form-area")
const commentArea = document.querySelector(".comments__area")

addCommentBtn.addEventListener("click", addComment)

function addComment() {

  if (!commentInputName.value || !commentText.value) {
    return
  }
  
  const comment = document.createElement("div")
  comment.classList.add("comments__item")
  comment.innerHTML = `   
                 <div class="comments__item-textbox">
                    <div class="comments__item-textbox__box">
                      <h3 class="comments__item-name">${commentInputName.value}</h3>
                    </div>
                    <div class="comments__item-mail">${commentInputMail.value}</div>
                  </div>
                  <p class="comments__item-text">${commentText.value}</p>`
  commentArea.append(comment)
  commentInputName.value = ""
  commentInputMail.value = ""
  commentText.value = ""
}
