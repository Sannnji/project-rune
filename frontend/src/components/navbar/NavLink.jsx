import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavLink({ href, linkName, ...props }) {
  return (
    <Box mr={4} fontFamily="AvQest" {...props}>
      <Link to={href}>{linkName}</Link>
    </Box>
  );
}
