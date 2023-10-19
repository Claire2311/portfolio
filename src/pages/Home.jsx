import woman from "../assets/images/woman.png";
import logoAdecco from "../assets/images/logo-adecco.png";
import logoBoulanger from "../assets/images/logo_boulanger.png";
import logoLinkedin from "../assets/images/logo-linkedin.png";
import cineAccueil from "../assets/images/CineReact-Accueil.png";
import tuumAccueil from "../assets/images/TuunVehiculum-Accueil.png";
import technos from "../data";
import TechnoCard from "../components/TechnoCard";
import logoGitHub from "../assets/images/github.png";
import eatingnamnam from "../assets/images/recipe-eatingnamnam.png";
import accessKids from "../assets/images/AccessKids-Jeu-Alphabet.png";
import { useRef } from "react";

function Home() {
  const aboutMe = useRef(null);
  const goOnAboutMe = () => {
    aboutMe.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-lightblue">
      <div className="bg-[url('./assets/images/background-zigzag.jpeg')] bg-cover h-96 md:h-[500px] lg:h-128 relative">
        <p className="text-3xl ml-8 pt-16 select-none md:ml-16 lg:pt-48 lg:ml-28">
          PORTFOLIO
        </p>
        <h1 className="font-source text-5xl ml-8 mt-6 select-none md:ml-16 md:text-8xl lg:text-9xl lg:ml-28">
          Claire Girard
        </h1>
        <div className="flex flex-col  lg:relative lg:flex-row">
          <p className="text-2xl mt-16 ml-8 select-none md:ml-16 lg:text-4xl lg:ml-28 lg:mt-48">
            DÉVELOPPEUSE WEB
          </p>
          <a
            href="#contact"
            className="text-2xl ml-8 mt-6 md:ml-16 lg:ml-28 lg:text-3xl lg:mt-48 lg:absolute lg:right-28 md:border-black md:border-b md:w-fit lg:pb-1"
          >
            CONTACTEZ-MOI
          </a>
          <div className="w-52 ml-8 border-black border-b md:hidden"></div>
        </div>
        <div className="md:flex absolute bottom-2 right-2/4 md:bottom-10 md:justify-center md:items-center">
          <button type="button" onClick={goOnAboutMe}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-8 md:mx-16">
        <h2
          className="font-bold text-2xl mt-8 md:text-4xl md:mt-24 md:mb-4"
          ref={aboutMe}
        >
          À propos de moi
        </h2>
        <div className="flex flex-col lg:flex-row">
          <img
            src={woman}
            alt="image de femme"
            className="mt-4 w-48 self-center lg:w-96"
          />
          <div className="mt-4 md:self-center lg:ml-24 md:text-xl">
            <p>
              Après 14 années d’expériences professionnelles, principalement
              dans le domaine du contrôle de gestion, j’ai entrepris une
              reconversion dans le développement web, l'univers numérique
              m'ayant toujours attiré.
            </p>
            <p className="mt-2">
              Grâce aux différents postes que j'ai occupé, j'ai pu développer un
              esprit d'analyse, de l'autonomie ainsi que des compétences en
              résolution de problèmes. J'ai évolué dans des environnements en
              mode projet ainsi que lean.
            </p>
            <p className="mt-2">
              Je souhaite mettre à profit ces compétences dans le cadre de ma
              reconversion.{" "}
              <a
                href="https://www.linkedin.com/in/claire-girard-48590711b"
                target="_blank"
                rel="noopener noreferrer"
              >
                N'hésitez pas à me contacter pour que nous puissions échanger
                ensemble.
              </a>
            </p>
          </div>
        </div>
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-24 md:mb-10">
          Mes expériences professionnelles
        </h2>
        <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2">
          <img
            src={logoAdecco}
            alt="Logo Adecco"
            className="w-24 mb-4 md:mb-0 md:w-40"
          />
          <div className="col-span-3">
            <h3 className="text-xl mb-2 font-bold ">
              Responsable Transformation
            </h3>
            <p>
              J'intervenais sur la réalisation et la conduite du plan de
              déploiement des projets de transformation de l'entreprise sur ma
              région. Pour cela, je réalisais des analyses, je coordonnais les
              étapes avec les différentes parties prenantes et enfin
              j'accompagnais les équipes dans le changement.
            </p>
            <h3 className="text-xl my-2 font-bold mt-4">
              Contrôleur de Gestion Opérationnel
            </h3>
            <p>
              Je m'occupais d'une région pour laquelle j'accompagnais le
              Directeur Régional sur les aspects financiers : leviers de
              rentabilité mais aussi contrôles des risques opérationnels (droit
              du travail, URSSAF, etc.). Cet accompagnement se traduisait par
              des analyses mais également de l'animation et de la formation
              auprès des équipes.
            </p>
          </div>
          <img
            src={logoBoulanger}
            alt="Logo Sourcing & Création"
            className="w-36 md:w-52 mt-10 lg:mt-6"
          />
          <div className="col-span-3">
            <h3 className="text-xl mb-2 font-bold mt-6">
              Coordinateur Développement Produits
            </h3>
            <p>
              Je travaillais pour l'entreprise Sourcing & Création, filiale du
              groupe Boulanger qui était en charge du développement des produits
              aux marques propres de Boulanger. Je coordonnais la mise en œuvre
              des projets sur toutes les étapes de leur développement du recueil
              de besoin auprès du chef de produits jusqu'à la commmercialisation
              dans les magasins.
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:justify-center items-center">
        <a
          href="https://www.linkedin.com/in/claire-girard-48590711b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl ml-8 mt-8 lg:-mt-24 lg:ml-0"
        >
          Pour en savoir plus, consultez mon profil LinkedIn
        </a>
        <img
          src={logoLinkedin}
          alt="Logo LinkedIn"
          className="w-10 mr-8 mt-8 lg:ml-4 lg:mr-0 lg:-mt-24"
        />
      </div>
      <div className="flex md:justify-center items-center">
        <a
          href="https://github.com/Claire2311"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl ml-8 mt-8 lg:-mt-4 lg:ml-0"
        >
          Visitez mon GitHub
        </a>
        <img
          src={logoGitHub}
          alt="Logo GitHub"
          className="w-10 ml-4 mr-8 mt-8 lg:ml-4 lg:mr-0 lg:-mt-4"
        />
      </div>
      <div className="mx-8 md:mx-16">
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-4 md:mb-8">
          Mes projets
        </h2>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="text-2xl mt-8 mb-2 md:text-3xl">Eating Nam Nam</h3>
            <div className="overflow-hidden h-48 md:hidden">
              <img
                src={eatingnamnam}
                alt="Page d'accueil Eating Nam Nam"
                className="mt-2 md:mt-8"
              />
            </div>
            <p className="mt-4 md:mt-0">
              Eating Nam Nam est une plateforme de partage de recettes entre
              utilisateurs.
              <br /> Après connexion au site, les utilisateurs peuvent chercher,
              consulter, créer, commenter et mettre en favori des recettes. Sur
              chaque recette, vous trouverez les apports nutritionnels pour une
              portion. Il est également possible de faire varier la quantité
              d’ingrédients en fonction du nombre de personnes pour lesquels
              vous prévoyez la recette. Lors de la création d’une recette,
              l’utilisateur peut créer un ingrédient s’il ne retrouve pas
              l’ingrédient souhaité sur le site. Il peut également gagner des
              badges en fonction de ces actions.
            </p>
            <p className="mt-4 md:mt-0 mb-8">
              Pour y accéder,{" "}
              <a
                href="https://eating-nam-nam.c-sia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici 🧑‍🍳👨‍🍳.
              </a>
            </p>
          </div>
          <div className="hidden md:block md:w-[1200px] md:h-60 overflow-hidden hover:overflow-y-scroll md:mt-2">
            <img
              src={eatingnamnam}
              alt="Page d'accueil Eating Nam Nam"
              className="mt-8 ml-4"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:mt-2">
            <h3 className="text-2xl mt-4 mb-2 md:hidden">Access Kids</h3>
            <img
              src={accessKids}
              alt="Page d'accueil Access Kids"
              className="h-52 w-[470px]"
            />
          </div>
          <div>
            <h3 className="hidden md:block md:text-2xl md:mt-4 md:mb-2 md:text-3xl md:ml-4 md:mt-0">
              Access Kids
            </h3>
            <p className="mt-4 md:mt-0 md:ml-4">
              Application réalisé lors d'un hackathon ayant pour thème
              l'éducation de demain.
            </p>
            <p className="md:ml-4">
              C'est une application éducative pour les jeunes enfants de 3 à 6
              ans qui fonctionne sous format de jeux pour apprendre l'alphabet,
              compter et se sensibiliser face aux dangers du quotidien
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="text-2xl mt-8 mb-2 md:text-3xl">CinéRéact</h3>
            <div className="overflow-hidden h-48 md:hidden">
              <img
                src={cineAccueil}
                alt="Page d'accueil CinéReact"
                className="mt-2 md:mt-8"
              />
            </div>
            <p className="mt-4 md:mt-0">
              Site internet réalisé dans le cadre de ma formation qui permet de
              retrouver des informations sur les films, séries et acteurs.
            </p>
            <p className="mt-4 md:mt-0">
              Ce site s'inspire du site themoviedb.org. Réalisé en équipe, nous
              avons utilisé les API proposées par le site. Nous avons également
              créé une fonctionnalité non présente sur le site initial : en
              indiquant votre année de naissance, vous avez la possibilité de
              connaitre le film ayant eu le plus de succès cette année mais
              également d'avoir une rétrospective des films qui ont pu marquer
              l'année de vos 5, 10, 15 ans ...
            </p>
            <p className="mt-4 md:mt-0 mb-8">
              Pour y accéder,{" "}
              <a
                href="https://cinereact.cdnsamuel.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici 🎬.
              </a>
            </p>
          </div>
          <div className="hidden md:block md:w-[1200px] md:h-60 overflow-hidden hover:overflow-y-scroll md:mt-2">
            <img
              src={cineAccueil}
              alt="Page d'accueil CinéReact"
              className="mt-8 ml-4"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:mt-2 md:mb-8">
            <h3 className="text-2xl mt-4 mb-2 md:hidden">Tuum Vehiculum</h3>
            <img
              src={tuumAccueil}
              alt="Page d'accueil Tuum Vehiculum"
              className="h-52 w-[800px]"
            />
          </div>
          <div>
            <h3 className="hidden md:block md:text-2xl md:mt-4 md:mb-2 md:text-3xl md:ml-4 md:mt-0">
              Tuum Vehiculum
            </h3>
            <p className="mt-4 md:mt-0 md:ml-4">
              Ce projet a été réalisé dans le cadre du 1er hackathon de notre
              formation. Nous avons eu 24 heures pour le créer. L'objectif était
              d'amener la technologie d'aujourd'hui au Moyen-Âge. Nous avons
              ainsi créé un site qui permet de commander une course avec
              possibilité de choix de la destination, du véhicule.
            </p>
            <p className="md:ml-4">
              Pour y accéder,{" "}
              <a
                href="https://tuum-vehiculum.achap.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cliquez ici 🏰.
              </a>
            </p>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-8 md:text-2xl">
          Et encore d'autres à venir ! 😉
        </h3>
      </div>
      <div className="mx-8 md:mx-16">
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-12 lg:mt-24 md:mb-8">
          Technos
        </h2>
        <div className="md:grid md:grid-cols-2 md:grid-rows-5">
          {technos.map((t) => (
            <TechnoCard key={t.name} name={t.name} image={t.img} />
          ))}
        </div>
      </div>
      <div className="mx-8 md:mx-16">
        <h2
          className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-12 lg:mt-24 md:mb-8"
          id="contact"
        >
          Contactez-moi
        </h2>
        <p>Vous trouverez mes coordonnées sur mon CV</p>
        <a
          href="https://www.linkedin.com/in/claire-girard-48590711b"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vous pouvez également me contacter via LinkedIn
        </a>
      </div>
      <div className="bg-[url('./assets/images/background-zigzag.jpeg')] bg-cover h-28 mt-10"></div>
    </main>
  );
}

export default Home;
