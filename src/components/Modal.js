const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div className="info">
      <i className="fa-solid fa-circle-info" onClick={() => setIsModalOpen(!isModalOpen)}></i>
      Modal
    </div>
  )
}

export default Modal;