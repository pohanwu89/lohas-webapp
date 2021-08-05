
function BootstrapNAV() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container"> <a className="navbar-brand" href="#">
          <i className="fa d-inline fa-lg fa-stop-circle" />
          <b> BRAND</b>
        </a><span className="navbar-text text-white">こんにちは ！丁さん</span> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar16" aria-expanded="true">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse show" id="navbar16" style={{}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-flex justify-content-center align-items-center"> <a className="nav-link" href="personalinfo.html"><i className="fa fa-user fa-fw text-white d-flex justify-content-center align-items-center" /></a> </li>
            <li className="nav-item avatar dropdown">
              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-fw fa-bell text-light" />
                <span className="badge badge-danger">4</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                <a className="dropdown-item waves-effect waves-light" href="#">Action <span className="badge badge-danger ml-2">4</span></a>
                <a className="dropdown-item waves-effect waves-light" href="#">Another action <span className="badge badge-danger ml-2">1</span></a>
                <a className="dropdown-item waves-effect waves-light" href="#">Something else here <span className="badge badge-danger ml-2">4</span></a>
              </div>
            </li>
          </ul> <a className="btn navbar-btn ml-md-2 btn-light text-dark">log out</a>
        </div>
      </div>
    </nav>
    );
  }
  
  export default BootstrapNAV;