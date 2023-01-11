import { ReactNode } from 'react';

interface Props {
  heading: string;
  paragraph: string;
  children: ReactNode;
}

const FeatureCard = ({ heading, paragraph, children }: Props) => {
  return (
    <div className="rounded-lg bg-gray-800">
      <h3 className="m-2 mt-4 text-center font-roboto text-4xl font-semibold text-white">
        {heading}
      </h3>
      {children}
      <p className="m-2 mx-4 mb-4 text-center font-roboto text-xl font-normal text-slate-500">
        {paragraph}
      </p>
    </div>
  );
};

export default FeatureCard;
