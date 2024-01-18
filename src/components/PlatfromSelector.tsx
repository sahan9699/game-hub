import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms,  { PlatForm } from "../hooks/usePlatForms";

interface Props {
  selectedParentPlatformId?: number;
  onSelectPlatform : (platform: PlatForm) => void;
}

const PlatformSelector = ({selectedParentPlatformId , onSelectPlatform}: Props) => { 

  const {data,error,isLoading} =  usePlatForms();
  const selectedPlatform = data?.results.find((platform) => platform.id === selectedParentPlatformId);
  
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       {selectedPlatform?.name || 'Plat forms'}
      </MenuButton>
      <MenuList >
        {data?.results.map((platform) => 
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
