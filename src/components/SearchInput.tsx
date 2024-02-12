import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../GameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
        } 
       
      }}

    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          type="text"
          placeholder="Search Games..."
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
