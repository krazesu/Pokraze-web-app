import styles from './Footer.module.css'

function Footer(){

    //create footer 
    return(
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer_left}`}>
                <span className={`${styles.copyright}`}>
                    Built with PokéAPI · Not affiliated with Nintendo or Game Freak
                </span>
                <span className={`${styles.credit}`}>
                Created by <a href="https://github.com/Krazesu" target="_blank" rel="noreferrer">Kraze</a>
                {' · '}
                    <a href="https://github.com/Krazesu" target="_blank" rel="noreferrer">GitHub ↗</a>
                </span>
            </div>
            <div className={`${styles.logo}`}>
                Pokráze
            </div>
        </footer>
    );
}

export default Footer