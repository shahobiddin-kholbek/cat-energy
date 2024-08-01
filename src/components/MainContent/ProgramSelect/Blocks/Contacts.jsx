import PropTypes from 'prop-types';
import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";
import EmailIcon from "../../../ui/icons/EmailIcon";
import PhoneIcon from "../../../ui/icons/PhoneIcon";

Contacts.propTypes = {
  contacts: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setContacts: PropTypes.func.isRequired,
};

export default function Contacts({ contacts, setContacts }) {
  const { email, phone } = contacts;

  const onChangeContacts = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pb-[67px] xs:pb-[23px] xs:pt-[26px]">
      <CaptionInLine caption="Контактные данные (владельца кота)" />
      <div className="px-[110px] xs:px-[20px] md:px-[71px] pt-[76px] xs:pt-[35px] grid grid-cols-2 md:grid-cols-1 xs:grid-cols-1 gap-[78px] md:gap-[20px] xs:gap-[14px]">
        <label
          htmlFor="email"
          className="relative flex items-center gap-[13px] "
        >
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-[#444444]">
            E-mail:*
          </p>
          <input
            type="email"
            value={email}
            onChange={onChangeContacts}
            id="email"
            name="email"
            placeholder="Email"
            className="w-full text-[#444444] uppercase text-[20px] leading-[30px] pr-[25px] h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
          />
          <span className="absolute  right-[19.72px]">
            <EmailIcon />
          </span>
        </label>
        <label
          htmlFor="phone"
          className="relative flex items-center gap-[13px] "
        >
          <p className="uppercase whitespace-nowrap text-[20px] leading-[30px] font-normal text-[#444444]">
            Телефон:*
          </p>
          <input
            type="phone"
            value={phone}
            onChange={onChangeContacts}
            id="phone"
            name="phone"
            placeholder="Phone"
            className="w-full text-[#444444] uppercase text-[20px] leading-[30px] pr-[25px] h-[52px] border border-[#E7E7E7] pl-[13px] outline-none"
          />
          <span className="absolute  right-[19.72px]">
            <PhoneIcon />
          </span>
        </label>
      </div>
    </div>
  );
}

