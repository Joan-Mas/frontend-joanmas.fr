//import interne
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

//import externe
import { useSelector } from "react-redux";

function Pages() {

    
    const namePage = useSelector((state) => state.localPage.value)
    console.log(namePage)

    switch (namePage) {
        case "Home":
          return;
        case "Portfolio":
          return <Portfolio/>;
        case "Contact":
          return <Contact/>;
        case "About":
          return <About/>;
      }
}

export default Pages;


