import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../GameQueryStore";


const SortSelector = () => {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date Added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find((order) => order.value == sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order By: { currentSortOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.lable}
            onClick={() => setSortOrder(sortOrder.value)}
            value={sortOrder.value}
          >
            {sortOrder.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
