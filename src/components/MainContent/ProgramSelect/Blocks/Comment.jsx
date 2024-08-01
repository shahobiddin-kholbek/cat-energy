import PropTypes from "prop-types";
import CaptionInLine from "../../../ui/icons/CaptioninLine/CaptioninLine";

export default function Comment({ comment, setComment }) {
  return (
    <div className="pb-[67px] xs:pb-[23px]">
      <CaptionInLine caption="Комментарии" />
      <div className="pt-[69px] xs:pt-[37px] px-[110px] xs:px-[20px] md:px-[70px]">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          id="comment"
          placeholder="Расскажите обо всех повадках кота"
          className="w-full text-[#444444] resize-none uppercase text-[20px] leading-[30px] pr-[25px] h-[174px] border border-[#E7E7E7] px-[19px] py-[10px] outline-none"
        ></textarea>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func,
};
