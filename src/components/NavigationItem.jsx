import './styles/NavigationItem.css'

function NavigationItem() {
    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i>Main Page</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-address-book"></i>Create Academic Period</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-clone"></i>Academic Period List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Create Labor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-chart-bar"></i>Labor List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy"></i>Self Evaluation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0);"><i className="far fa-copy"></i>Self Evaluation List</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavigationItem;