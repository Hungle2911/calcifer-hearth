import { Link } from "react-router-dom";

const BackToHomeButton = () => {
  return (
    <div className="mt-8">
      <Link
        to="/"
        className="inline-block bg-[#FFB238] hover:bg-yellow-400 text-[#00202e] font-semibold py-2 px-4 border border-transparent rounded-lg shadow-md transition duration-300"
      >
        <i className="fa-solid fa-house mr-2"></i>
        Back to Home Page
      </Link>
    </div>
  );
};

export default BackToHomeButton;
