import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../services/useAuth";

export default function SignIn() {
  const auth = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      auth.login(values);
      history.push("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormLabel>Username</FormLabel>
      <Input
        name="username"
        type="text"
        value={formik.values.username}
        onChange={formik.handleChange}
      />

      <FormLabel>Password</FormLabel>
      <Input
        name="password"
        type="text"
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
