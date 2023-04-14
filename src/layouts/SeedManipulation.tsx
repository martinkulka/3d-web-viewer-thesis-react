import AddButton from '../components/AddButton';
import RemoveButton from '../components/RemoveButton';

const SeedManipulation = ({ numberOfSeeds, addSeed, removeSeed }) => {
  return (
    <div className="flex justify-center">
      <AddButton
        onClick={addSeed}
        className={`${numberOfSeeds > 1 && 'mr-1'}`}
      />
      {numberOfSeeds > 1 && (
        <RemoveButton onClick={removeSeed} className="ml-1" />
      )}
    </div>
  );
};

export default SeedManipulation;
