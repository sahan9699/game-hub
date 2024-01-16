import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedParentPlatform: Platform | null;
  onSelectPlatform : (platform: Platform) => void;
}

const PlatformSelector = ({selectedParentPlatform , onSelectPlatform}: Props) => {

const {data,error,isLoading} =  usePlatForms();

  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       {selectedParentPlatform?.name || 'Plat forms'}
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
