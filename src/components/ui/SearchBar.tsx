import { FC, useState } from 'react';

// Component to render a search bar
const SearchBar: FC = () => {
  // State to store the current value of the input field
  const [formValue, setFormValue] = useState('');

  return (
    <form className="w-full flex gap-3 bg-[#2C2E33]/30 border-lightGrey border-[1px] px-4 py-1.5 rounded">
      <img src="./assets/search.svg" className='w-4' />

      <input
        type="text"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)} // Updates state when the input changes
        placeholder="Search"
        className="bg-transparent outline-none w-full"
      />
    </form>
  );
};

export default SearchBar;
