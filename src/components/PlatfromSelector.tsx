import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatForms";

const PlatformSelector = () => {

const {data,error,isLoding} =   usePlatForms();

  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((platform) => 
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
