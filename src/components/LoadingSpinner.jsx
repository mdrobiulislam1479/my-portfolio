const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-primary text-center px-10">
      <span className="relative text-secondary text-5xl pb-2 animate-pulse">
        Welcome To My Portfolio
        <span className="animated-border"></span>
      </span>

      {/* Custom CSS */}
      <style>{`
        .animated-border {
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 3px;
          width: 100%;
          background: linear-gradient(
            to right,
            transparent,
            currentColor,
            transparent
          );
          background-size: 200% 100%;
          animation: smoothBorder 1.5s ease-in-out infinite;
        }

        @keyframes smoothBorder {
          0% {
            background-position: 200% 0;
          }
          50% {
            background-position: 100% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
