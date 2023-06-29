import { MainLayout } from "../../MainLayout/Layout"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <MainLayout>
        Home
        <br/>
    <Link to={"/"} > Back </Link>
    </MainLayout>
  
  )
}
