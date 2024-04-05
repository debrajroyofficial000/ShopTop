import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        Oops! Something went wrong.
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        It seems that there was an error processing your request. Please try
        again later or contact support for assistance.
      </p>
      <button
        onClick={handleNavigation}
        className="text-blue-600 hover:text-blue-800 text-lg border px-4 py-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
