import PropTypes from "prop-types";

export default function PlusIcon({showAll}) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!showAll && <line x1="31" x2="31" y2="60" stroke="#D3D3D3" strokeWidth="2" />}
      <line x1="60" y1="31" y2="31" stroke="#D3D3D3" strokeWidth="2" />
    </svg>
  );
}

PlusIcon.propTypes = {
  showAll: PropTypes.bool
}
