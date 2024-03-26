import { CardProp } from "../types/types";
const Tablet = ({ value }: { value: CardProp }) => {
  return (
    <div className="shade text-xs leading-3 font-bold flex items-center py-1 px-2">
      {value.name}
    </div>
  );
};

export default Tablet;
