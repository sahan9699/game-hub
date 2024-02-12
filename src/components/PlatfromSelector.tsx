import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../GameQueryStore";
import usePlatForms from "../hooks/usePlatForms";
import useSelectedPlatForm from "../hooks/useSelectedPlatform";


const PlatformSelector = () => {
  const { data, error } = usePlatForms();
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId  = useGameQueryStore(s => s.setPlatformId)
  
  const selectedPlatform = useSelectedPlatForm(platformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Plat forms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
