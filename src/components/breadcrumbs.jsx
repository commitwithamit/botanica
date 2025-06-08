import { Link, useLocation } from "react-router-dom";

export function Breadcrumbs(){
    const location = useLocation();
    console.log(location);

    let current = "";
    const crumb = location.pathname.split("/");
    console.log(crumb);

    return(
        <h6>bread</h6>
    )
}




// home -> herbs&culinary(click) 
// url = domain/plant-type/herbs-and-culinary
// bc = Home > Shop > Herbs & Culinary
// show herbs & culinary products

// home -> product(any product)
// url = domain/plant/plant-name
// bc = home > Herbs & Culinary > plant name