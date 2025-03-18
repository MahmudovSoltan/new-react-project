import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import MainComponent from "../../components/mainComponent/MainComponent";
import LeftCompomnent from "../../components/leftComponent/LeftCompomnent";
import DeleteModal from "../../components/modal/DeleteModal";
import { useUser } from "../../components/contextApi/UsersCpntext";

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[userId,setUserId]=useState(null)
 const {deleteUser}= useUser()
  const handleDelete = () => {
    deleteUser(userId)
    setIsModalOpen(false);
  };
  const openDeleteModal =(id)=>{
    setUserId(id)
    setIsModalOpen(true)
    console.log(id);
    
  }
  return (
    <div className="main_page_container">
      <SideBar />
      <MainComponent  setIsModalOpen={openDeleteModal} />
      <LeftCompomnent />
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MainPage;
