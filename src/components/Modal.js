const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className="info">
      <i class="fa-solid fa-xmark fa-icons-style" onClick={() => setIsModalOpen(!isModalOpen)}></i>
      <div className="info-content">
        <p>
          Each guess must be a valid 5 letter word. Enter your guess into the field and hit the enter button to submit.
        </p>
        <p>
          After submitting your guess, click on each letter tile to change its color to match your guess in the game.
        </p>
        <p>
          Possible answers will show up at the bottom section of the page.
        </p>
        <p>
          Repeat until you find the answer to the game.
        </p>
      </div>
    </div>
  )
}

export default Modal;