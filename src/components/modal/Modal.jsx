import { useState, useEffect } from "react";
import { useUser } from "../contextApi/UsersCpntext";
   
const Modal = ({ setIsOpen, isOpen }) => {
  const { addUser,user } = useUser();
  const [disable, setDisable] = useState(true); // Əvvəlcə POST düyməsi disabled olsun
  const [form, setForm] = useState({
    fullName: "",
    imgUrl: "",
    fourMind: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (form.fullName.trim() && form.fourMind.trim() && form.imgUrl.trim()) {
      setDisable(false); 
    } else {
      setDisable(true);
    }
  }, [form]);

  const sendRequest = () => {
    addUser(form);
    setIsOpen(false);
    setForm({
      fullName: "",
      imgUrl: "",
      fourMind: "",
    })
     
  };


  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create post</h2>

            <input
              type="text"
              placeholder="FullName"
              value={form.fullName}
              name="fullName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Photo"
              value={form.imgUrl}
              name="imgUrl"
              onChange={handleChange}
            />
            <textarea
              placeholder="What's on your mind?"
              value={form.fourMind}
              name="fourMind"
              onChange={handleChange}
            ></textarea>

            <div className="icons">
              <span>😊</span>
              <span>🖼️</span>
              <span>🎥</span>
              <span>➕👥</span>
            </div>

            <div className="footer">
              <button
                className="post-btn"
                disabled={disable} // Yalnız bütün inputlar doludursa aktiv olacaq
                onClick={sendRequest}
              >
                POST
              </button>
              <button className="calendar-btn">📅</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
