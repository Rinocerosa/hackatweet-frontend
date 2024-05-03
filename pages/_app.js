<<<<<<< HEAD
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import Home from "../components/Home";
=======
import "../styles/globals.css";
import Head from "next/head";
// redux-persist
>>>>>>> 71f4e0e3ee896e89339736b163cdde3ef5f7a8f1

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// redux
import { Provider } from "react-redux";
import users from "../reducers/users";
const reducers = combineReducers({ users });
const persistConfig = { key: "morningnews", storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);
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
<<<<<<< HEAD
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      {!isAuthenticated && <SignIn />}
      {!isAuthenticated && <SignUp />}
      {isAuthenticated && <Home />}
    </>
=======
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
>>>>>>> 71f4e0e3ee896e89339736b163cdde3ef5f7a8f1
  );
}

export default App;
