import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <div className='main'>{children}</div>;
}

export default Main;
