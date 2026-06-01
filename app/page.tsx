import Image from "next/image";
import Header from "./components/header";
import Bouton from "./components/bouton";

export default function Home() {
  return (
    <>
      <Header />

      <main >
        <h1>Mon Portfolio, je suis Fiona Radi</h1>
        <p> Étudiant·e en BUT, passionné·e par [domaine]. Découvrez mes projets SAÉ, 
          mon expérience de stage et ma montée en compétences à travers ce portfolio.
        </p>

        <Bouton />
      </main>
    </>
  );
}