


export default function Header (){
    return (
        <header className="bg-black text-white p-4 flex justify-between items-center">
            <h2>Portfolio</h2>
            <nav>
                <a href="#" className="navigationItems">Accueil</a>
                <a href="#" className="navigationItems">Projets</a>
                <a href="#" className="navigationItems">Compétences</a>
            </nav>
        </header>
    );
}