import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Home from "../components/Home";

function App({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      {!isAuthenticated && <SignIn />}
      {!isAuthenticated && <SignUp />}
      {isAuthenticated && <Home />}
    </>
  );
}

export default App;
