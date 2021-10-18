import { useState } from "react";
import { Box, Text, Button, Input, Center } from "@chakra-ui/react";
import { FormLabel, FormControl } from "@chakra-ui/form-control";

import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../services/useAuth";

export default function SignIn() {
  const auth = useAuth();
  let history = useHistory();

  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      const response = await auth.login(values);

      if (response.data.error) {
        setMessage(response.data.error);
      } else {
        setMessage(
          "Sign up successful you will be redirected to the home page"
        );
        setTimeout(() => history.push("/"), 3000);
      }
    },
  });

  return (
    <Center mt={16} flexDir="column">
      <Text color="#C53030">{message}</Text>
      <Box color="#C7B377" p={4} borderRadius="md" textAlign="center">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              type="text"
              isRequired={true}
              borderColor="white"
              value={formik.values.username}
              onChange={formik.handleChange}
            />

            <FormLabel mt={2}>Password</FormLabel>
            <Input
              name="password"
              type="password"
              isRequired={true}
              borderColor="white"
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <Button type="submit" mt={4} w="100%">
              Log In
            </Button>
          </FormControl>
        </form>

        <Text my={4}>or</Text>

        <Link to="/signup">
          <Button w="100%" variant="outline">
            New here? Create an account.
          </Button>
        </Link>
      </Box>
    </Center>
  );
}
