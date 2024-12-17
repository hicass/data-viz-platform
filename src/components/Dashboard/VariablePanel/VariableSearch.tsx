import { FC } from 'react';
import SearchBar from '../../ui/SearchBar';
import Button from '../../ui/Button';

// Component to render the Variable Panels search elements
const VariableSearch: FC = () => {
  return (
    <div className="flex gap-2 mt-6 text-sm">
      <SearchBar />

      <Button
        variant="text"
        text="Autofill"
        style="bg-grey hover:bg-white/10 w-1/5"
        onClick={() => console.log('Button Clicked!')}
      />
      
      <Button
        variant="text"
        text="Rerun"
        style="bg-[#23291E] hover:bg-[#577113]/30 border-[#577113] text-[#C9FF3B] w-1/5"
        onClick={() => console.log('Button Clicked!')}
      />
    </div>
  );
};

export default VariableSearch;
