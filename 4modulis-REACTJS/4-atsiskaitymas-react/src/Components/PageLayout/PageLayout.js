import { Outlet } from "react-router-dom"
import { InnerNavigation } from "../Navigation/InnerNavigation"

export const PageLayout = () => {
    return (
        <>
    
          <InnerNavigation/>

          <Outlet/>
        
        </>
    )
}