


function Header(props) {
    let header = props.prop ; 
    return (

        <div>
            <div>
                <div className="content-text-container" >
                <h2 className="header-text-container" >{header.head.content}</h2>
                <p className="par-text-container">{header.desc.content}</p>
                </div>
                <button className="explore-python-container "><h3>{header.btn.content}</h3></button>
            </div>    
        </div>

    );
}

export default Header;