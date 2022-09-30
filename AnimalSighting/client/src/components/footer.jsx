import react from "react";
import '../App.css';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return (
    <div className="footer">
    <footer>Sources used:
        <br></br>
        http://www.conservewildlifenj.org/education/ospreycam/
        <br></br>
        https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status
    </footer>
    </div>
  )};
  
  export default Footer;