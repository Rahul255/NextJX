import Link from "next/link";

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/"><a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/features"><a className="nav-link" >Features</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/price"><a className="nav-link" >Pricing</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/about"><a className="nav-link" >About</a></Link>
                </li>
            </ul>
        </div>
    </nav>
);
export default Nav;