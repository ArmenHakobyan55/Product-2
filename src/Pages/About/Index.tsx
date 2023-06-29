import { MainLayout } from "../../MainLayout/Layout"
import { Link } from "react-router-dom"

export const About = () => {
  return (
    <MainLayout>
       About
        <br/>
    <Link to={"/"} > Back </Link>
    </MainLayout>
  
  )
}
