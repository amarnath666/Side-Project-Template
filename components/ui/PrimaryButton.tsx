"use client";

import { ButtonProps } from "@/app/types/landing";
import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ name, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <StyledWrapper variant={variant}>
      <button onClick={onClick} className={`button ${variant}`}>
        {name}
        {variant === "primary" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17l6 -6l4 4l8 -8" />
            <path d="M14 7l7 0l0 7" />
          </svg>
        )}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{
  variant: "primary" | "secondary" | "navbar";
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ variant }) => (variant === "primary" ? "8px" : "0")};
    cursor: pointer;
    padding: ${({ variant }) =>
      variant === "navbar" ? "8px 16px" : "12px 16px"};
    font-size: 1em;
    color: white;
    background: #212121;
    border-radius: 0.5em;
    border: 0;
     position: relative;
    z-index: 1;
    width: 100%;

    ${({ variant }) =>
      variant === "secondary" &&
      `
      width: 136.04px;
      height: 48px;
      border: 1px solid #e5e7eb;
      background: transparent;
      color: #212121;
    `}
  }

  .button:hover {
    outline: 0;

    ${({ variant }) =>
      variant !== "primary" &&
      `
        transform: scale(1.02);
        box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
        background: linear-gradient(45deg, #212121, #252525);
      `}

    ${({ variant }) =>
      variant === "secondary" &&
      `
        background: transparent;
      `}
  }

  .icon {
    fill: white;
    width: 1em;
    height: 1em;
    transition: transform 0.3s ease;
  }

  .button:hover .icon {
    ${({ variant }) =>
      variant === "primary" &&
      `
        transform: translate(3px, -3px);
      `}
  }
`;

export default PrimaryButton;
