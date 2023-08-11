import { useRouter } from "next/router";
import Header from "../components/Header";
import { appRoutes } from "../utils/appRoutes";

const authPaths = [
  appRoutes.signupPath(),
  appRoutes.loginPath(),
]

export default function Layout({ children }) {
  const { pathname } = useRouter();

  const isAuthPath = authPaths.includes(pathname);
  
  return (
    <div className="w-screen h-screen relative">
      {!isAuthPath && <Header />}
      {children}
    </div>
  );
}
