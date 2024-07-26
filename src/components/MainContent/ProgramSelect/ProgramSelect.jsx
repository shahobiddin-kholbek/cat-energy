import { useState } from "react";
import "./programSelect.css";
import Info from "./Blocks/Info";
import Contacts from "./Blocks/Contacts";
import Comment from "./Blocks/Comment";
import Additionally from "./Blocks/Additionally";
import PetInfoModal from "./PetInfoModal/PetInfoModal";

export default function ProgramSelect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [petInfo, setPetInfo] = useState({
    name: "",
    weight: "",
    age: "",
    selectedOption: "Похудение",
  });
  const [contacts, setContacts] = useState({
    email: "",
    phone: "",
  });
  const [comment, setComment] = useState("");
  const [additional, setAdditional] = useState([]); 

  const onSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); 

    setFormData({
      petInfo,
      contacts,
      comment,
      additional,
    });

    setPetInfo({
      name: "",
      weight: "",
      age: "",
      selectedOption: "Похудение",
    });
    setContacts({
      email: "",
      phone: "",
    });
    setComment("");
    setAdditional([]);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };


  return (
    <section className="pt-[187px] pb-[82px]">
      <div className="px-[110px]">
        <h1 className="pb-[56px] text-[60px] leading-[60px] font-normal text-black">
          Подбор программы
        </h1>
        <p className="uppercase w-[323px] pb-[66px] text-[20px] leading-[30px] font-normal text-black">
          Заполните анкету, и мы подберем программу питания для вашего кота
        </p>
      </div>
      <form action="" onSubmit={onSubmit} className="">
        <Info petInfo={petInfo} setPetInfo={setPetInfo} />
        <Contacts contacts={contacts} setContacts={setContacts} />
        <Comment comment={comment} setComment={setComment} />
        <Additionally additional={additional} setAdditional={setAdditional} />
        <div className="grid grid-cols-2 items-center gap-[81px] px-[110px]">
          <button className="uppercase py-[14px] hover:opacity-90 text-white bg-[#68B738]">
            отправить заявку
          </button>
          <p className="text-black text-[16px] leading-4">* — Обязательные поля</p>
        </div>
      </form>
      <PetInfoModal isOpen={isModalOpen} onClose={handleCloseModal} data={formData} />
    </section>
  );
}
