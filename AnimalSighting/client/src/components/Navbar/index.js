import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {



return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		<NavLink to="/endangered" activeStyle>
			 Endangered Species
		</NavLink>
		<NavLink to="/sighting" activeStyle>
			Meet our Animals
		</NavLink>
		<NavLink to="/forms" activeStyle>
			Add Species or Sighting
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
