const B = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-100 p-1.5 md:py-2 md:px-4 rounded-[5px] border-2 border-gray-600 text-sm md:text-base text-black hover:text-gray-600 hover:bg-gray-200 hover:border-gray-600 transition-all duration-200"
    >
      {name}
    </button>
  );
};
export default B;
