import AnalyzeIcon from '../assets/AnalyzeIcon';
import UploadIcon from '../assets/UploadIcon';
import ViewIcon from '../assets/ViewIcon';
import FeatureCard from '../components/FeatureCard';

const FeatureCardGrid = () => {
  return (
    <div className="mx-auto mt-8 grid w-2/3 grid-cols-1 gap-2 md:mt-12 md:gap-8 lg:grid-cols-3">
      <FeatureCard
        heading="Upload"
        paragraph="Upload your file using the button below and start analyzing your image
        instantly. It&#39;s that easy."
      >
        <UploadIcon className="mx-auto h-6 w-6 stroke-1 md:h-12 md:w-12" />
      </FeatureCard>

      <FeatureCard
        heading="View"
        paragraph="Once your file has loaded, you will be able to view all orientations
        and also a 3D volume render of the image."
      >
        <ViewIcon className="mx-auto h-6 w-6 stroke-1 md:h-12 md:w-12" />
      </FeatureCard>

      <FeatureCard
        heading="Analyze"
        paragraph="Apply various filters and analyze the image using various functions
        implemented from the Python library SimpleITK."
      >
        <AnalyzeIcon className="mx-auto h-6 w-6 stroke-1 md:h-12 md:w-12" />
      </FeatureCard>
    </div>
  );
};

export default FeatureCardGrid;
