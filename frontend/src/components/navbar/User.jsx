import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../services/useAuth";
import NavLink from "./NavLink";

export default function User() {
  let auth = useAuth();
  let history = useHistory();

  return auth.user ? (
    <Menu>
      <MenuButton color="#C7B377" as={Button}>
        {auth.user.username}
      </MenuButton>
      <MenuList border="none" color="#C7B377">
        <MenuItem
          onClick={() => {
            auth.signOut();
            history.push("/");
          }}
        >
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <>
      <NavLink href="/signin" linkName="Sign In" />
      <NavLink
        href="/signup"
        linkName="Sign Up"
        borderRadius="md"
        bg="white"
        color="#C7B377"
        mr={0}
        px={4}
        py={1.5}
        _hover={{ bg: "#E2E8F0" }}
      />
    </>
  );
}
