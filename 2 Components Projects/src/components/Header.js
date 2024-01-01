const Header = (props) => {
    return (
        <header>
            <img src={props.imageSrc} alt={props.imageAlt} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </header>
    )
}

export default Header;