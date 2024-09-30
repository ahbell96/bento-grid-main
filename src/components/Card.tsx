// Card.tsx
import React, { ReactElement } from "react";

interface CardProps {
  title: ReactElement<any, any> | string;
  textColor?: string;
  bgColor: string;
  image: string;
  imageSize: number;
  imgAlt: string;
  description?: string;
  children?: React.ReactNode;
  colSpan?: string;
  rowSpan?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  textColor = "black",
  bgColor,
  image,
  imageSize,
  imgAlt,
  description,
  children,
  colSpan,
  rowSpan,
}) => {
  const cs = colSpan ? colSpan : "";
  const rs = rowSpan ? rowSpan : "";
  return (
    <div
      className={`${cs} ${rs} rounded-md flex flex-col justify-evenly items-center p-6`}
      style={{ backgroundColor: bgColor }}
    >
      {typeof title === "string" ? (
        <h2 className={`font-bold text-${textColor} text-2xl`}>{title}</h2>
      ) : (
        title
      )}

      <img src={image} alt={imgAlt} width={imageSize} />
      {description && (
        <p className={`text-${textColor} text-xl`}>{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;
