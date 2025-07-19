import React from "react";

const InfiniteCircle: React.FC = () => {
  const text = "JOIN NOW";

  return (
    <button
      style={{
        cursor: "pointer",
        border: "none",
        background: "#609FFF",
        color: "#fff",
        width: "110px",
        height: "110px",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
        display: "grid",
        placeContent: "center",
        transition: "background 300ms, transform 200ms",
        fontWeight: 600,
      }}
      className="animated-button"
    >
      <p
        style={{
          position: "absolute",
          inset: 0,
          animation: "text-rotation 8s linear infinite",
        }}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              position: "absolute",
              transform: `rotate(${19 * index}deg)`,
              inset: "7px",
            }}
          >
            {char}
          </span>
        ))}
      </p>

      <div
        style={{
          position: "relative",
          width: "40px",
          height: "40px",
          overflow: "hidden",
          background: "#fff",
          color: "#609FFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          style={{
            position: "absolute",
            transition: "transform 0.3s ease-in-out",
          }}
          className="icon-original"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          style={{
            position: "absolute",
            transform: "translate(-150%, 150%)",
            transition: "transform 0.3s ease-in-out 0.1s",
          }}
          className="icon-copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Keyframes in a <style> tag */}
      <style>{`
        @keyframes text-rotation {
          to {
            rotate: 360deg;
          }
        }

        .animated-button:hover {
          background: #000;
          transform: scale(1.05);
        }

        .animated-button:hover .icon-original {
          color: #000;
          transform: translate(150%, -150%);
        }

        .animated-button:hover .icon-copy {
          transform: translate(0);
        }
      `}</style>
    </button>
  );
};

export default InfiniteCircle;
