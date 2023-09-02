import "./Footer.css";

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/facebook-circle.svg" alt="Facebook"/>
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/twitter.svg" alt="twitter" />
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/instagram.svg" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Sevastian Caballero</strong>
    </footer>
}

export default Footer;