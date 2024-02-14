import React from "react";
interface IBackgroundImageTextProps {
  text: string;
}

const BackgroundImageText: React.FC<IBackgroundImageTextProps> = ({ text }) => {
  return (
    <section id="bg-heading">
      <div id="up-heading" className="text-center">
        {text}
      </div>
    </section>
  );
};

export default BackgroundImageText;
