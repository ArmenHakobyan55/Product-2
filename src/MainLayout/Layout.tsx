import { Heder } from "./Heder/Index";
import { Footer } from "./Footer";


export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <>
     <Heder/>

     <main>{props.children}</main>
      
    <Footer/>
    </>
 
  );
};
