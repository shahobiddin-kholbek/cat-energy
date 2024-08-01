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
    <section className="pt-[187px] xs:pt-[27px] pb-[82px] md:pb-[72px] xs:pb-[32px]">
      <div className="px-[110px] xs:px-[20px] md:px-[70px]">
        <h1 className="pb-[56px] xs:pb-[37px] text-[60px] xs:text-[36px] leading-[60px] xs:leading-[36px] font-normal text-black">
          Подбор программы
        </h1>
        <p className="uppercase w-[323px] xs:w-[226px] pb-[66px] xs:pb-[39px] text-[20px] xs:text-[14px] leading-[30px] xs:leading-[18px] font-normal text-black">
          Заполните анкету, и мы подберем программу питания для вашего кота
        </p>
      </div>
      <form action="" onSubmit={onSubmit} className="">
        <Info petInfo={petInfo} setPetInfo={setPetInfo} />
        <Contacts contacts={contacts} setContacts={setContacts} />
        <Comment comment={comment} setComment={setComment} />
        <Additionally additional={additional} setAdditional={setAdditional} />
        <div className="grid grid-cols-2 xs:grid-cols-1 items-center  gap-[81px] xs:gap-[21px] px-[110px] xs:px-[20px] md:px-[70px]">
          <button className="uppercase  py-[14px] hover:opacity-90 text-white bg-[#68B738]">
            отправить заявку
          </button>
          <p className="text-black text-[16px] xs:text-center leading-4">* — Обязательные поля</p>
        </div>
      </form>
      <PetInfoModal isOpen={isModalOpen} onClose={handleCloseModal} data={formData} />
    </section>
  );
}
