import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavLink({ href, linkName, ...props }) {
  return (
    <Box
      mr={{ base: 0, lg: 4 }}
      my={{ base: 2, lg: 0 }}
      fontFamily="AvQest"
      {...props}
    >
      <Link to={href}>{linkName}</Link>
    </Box>
  );
}
