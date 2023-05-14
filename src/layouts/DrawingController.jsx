import { useAtom } from 'jotai';
import { RadioGroup } from '@headlessui/react';
import { drawingAtom } from '../atoms/drawingAtom';

const DrawingController = ({ nv }) => {
  const [drawing, setDrawing] = useAtom(drawingAtom);

  const handleDrawing = (value) => {
    if (value === 'off') {
      nv.setDrawingEnabled(false);
    } else {
      nv.setDrawingEnabled(true);
    }

    if (value === 'red') {
      nv.setPenValue(1, true);
    }

    if (value === 'green') {
      nv.setPenValue(2, true);
    }

    if (value === 'blue') {
      nv.setPenValue(3, true);
    }
  };

  return (
    <div className="mx-6 mb-2 flex flex-row justify-between">
      <p className="text-md my-auto font-roboto font-bold leading-6 text-white">
        Drawing mode
      </p>
      <RadioGroup value={drawing} onChange={setDrawing}>
        <div className="relative flex space-x-2 pb-2">
          <RadioGroup.Option
            value="off"
            className={({ checked }) =>
              `${
                checked && 'border-2 border-white'
              } cursor-pointer rounded-full bg-gray-700 p-4`
            }
            onClick={() => handleDrawing('off')}
          />
          <RadioGroup.Option
            value="red"
            className={({ checked }) =>
              `${
                checked && 'border-2 border-white'
              } cursor-pointer rounded-full bg-red-600 p-4`
            }
            onClick={() => handleDrawing('red')}
          />
          <RadioGroup.Option
            value="green"
            className={({ checked }) =>
              `${
                checked && 'border-2 border-white'
              } cursor-pointer rounded-full bg-green-600 p-4`
            }
            onClick={() => handleDrawing('green')}
          />
          <RadioGroup.Option
            value="blue"
            className={({ checked }) =>
              `${
                checked && 'border-2 border-white'
              } cursor-pointer rounded-full bg-blue-600 p-4`
            }
            onClick={() => handleDrawing('blue')}
          />
        </div>
      </RadioGroup>
    </div>
  );
};

export default DrawingController;
