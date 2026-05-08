function Footer(){

    //create footer 
    return(
        <footer className="footer">
            <div className="footer-left">
                <span className="footer-copy">
                    Built with PokéAPI · Not affiliated with Nintendo or Game Freak
                </span>
                <span className="footer-credit">
                Created by <a href="https://github.com/Krazesu" target="_blank" rel="noreferrer">Kraze</a>
                {' · '}
                    <a href="https://github.com/Krazesu" target="_blank" rel="noreferrer">GitHub ↗</a>
                </span>
            </div>
            <div className="footer-logo">
                Pokráze
            </div>
        </footer>
    );
}

export default Footer