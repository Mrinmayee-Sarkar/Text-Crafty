//import { Link } from "react-router-dom"
export default function PageInterface(props){

 
    return( 
    <nav className={`navbar navbar-expand-lg navbar-${props.colors} bg-${props.colors}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.heading}</a>
         { /*<Link className="nav-link active" aria-current="page" to="/">{props.heading}</Link>*/}
        </li>
       { /*<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.heading1}</Link>
    </li>*/}</ul>
        <div className={`form-check form-switch mx-4 text-${props.colors==="light"?"dark":"light"}`} onClick={props.handleSwitch}>
       <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.texts}</label>
       </div>
       
      </div>
  </div>
</nav>)
}