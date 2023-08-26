import logoAdecco from "../assets/images/logo-adecco.png";
import logoSourcing from "../assets/images/logo-sourcing.jpeg";
import logoBoulanger from "../assets/images/logo_boulanger.png";
import logoLinkedin from "../assets/images/logo-linkedin.png";
import cineAccueil from "../assets/images/CineReact-Accueil.png";
import tuumAccueil from "../assets/images/TuunVehiculum-Accueil.png";
import technos from "../data";
import TechnoCard from "../components/technoCard";

function Home() {
  return (
    <div className="bg-lightblue">
      <div className="bg-[url('./assets/images/background-zigzag.jpeg')] bg-cover h-96 md:h-128 ">
        <p className="text-3xl ml-8 pt-16 md:pt-48 md:ml-28">PORTFOLIO</p>
        <h1 className="font-source text-5xl ml-8 mt-6 md:text-9xl md:ml-28">
          Claire Girard
        </h1>
        <div className="flex flex-col  md:relative md:flex-row">
          <p className="text-2xl mt-16 ml-8 md:text-4xl md:ml-28 md:mt-48">
            DÉVELOPPEUSE WEB
          </p>
          <a
            href="#contact"
            className="text-2xl ml-8 mt-6 md:text-3xl md:mt-48 md:absolute md:right-28 md:border-black md:border-b md:pb-1"
          >
            CONTACTEZ-MOI
          </a>
          <div className="w-52 ml-8 border-black border-b md:hidden"></div>
        </div>
        <div className="md:flex md:-mt-24 md:justify-center md:items-center">
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
        </div>
      </div>
      <div className="mx-8 md:mx-16">
        <h2 className="font-bold text-2xl mt-8 md:text-4xl md:mt-24 md:mb-4">
          À propos de moi
        </h2>
        <div className="flex flex-col md:flex-row">
          <img
            src="../src/assets/images/woman.png"
            alt="image de femme"
            className="mt-4 w-48 self-center md:w-96"
          />
          <div className="mt-4 md:self-center md:ml-24 md:text-xl">
            <p>
              Après 14 années d’expériences professionnelles, principalement
              dans le domaine du contrôle de gestion, j’ai entrepris une
              reconversion dans le développement web, l'univers numérique
              m'ayant toujours attiré.
            </p>
            <p className="mt-2">
              Grâce à aux différents postes que j'ai occupé, j'ai pu développer
              un esprit d'analyse, de l'autonomie ainsi que des compétences en
              résolution de problèmes. J'ai évolué dans des environnements en
              mode projet ainsi que lean.
            </p>
            <p className="mt-2">
              Je souhaite mettre à profit ces compétences dans le cadre de ma
              reconversion. N'hésitez pas à me contacter pour que nous puissions
              échanger ensemble.
            </p>
          </div>
        </div>
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-24 md:mb-10">
          Mes expériences professionnelles
        </h2>
        <div className="md:grid md:grid-cols-4 md:grid-rows-2">
          <img
            src={logoAdecco}
            alt="Logo Adecco"
            className="w-24 mb-4 md:mb-0 md:w-48"
          />
          <div className="col-span-3">
            <h3 className="text-xl mb-2 font-bold">
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
            className="w-36 md:w-52 mt-10 md:mt-6"
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
          className="text-2xl ml-8 mt-8 md:-mt-24 md:ml-0"
        >
          Pour en savoir plus, consultez mon profil LinkedIn
        </a>
        <img
          src={logoLinkedin}
          alt="Logo LinkedIn"
          className="w-10 mr-8 mt-8 md:ml-4 md:mr-0 md:-mt-24"
        />
      </div>
      <div className="mx-8 md:mx-16">
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-4 md:mb-8">
          Mes projets
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="h-48 md:w-[1000px] md:h-56 overflow-hidden hover:overflow-y-scroll">
            <img src={cineAccueil} alt="Accueil du projet 1" className="" />
          </div>
          <div>
            <h3 className="text-2xl mt-4 mb-2 md:text-3xl md:ml-4 md:mt-0">
              CinéReact
            </h3>
            <p className="md:ml-4">
              Site internet réalisé dans le cadre de ma formation qui permet de
              retrouver des informations sur les films, séries et acteurs.
            </p>
            <p className="md:ml-4">
              Ce site s'inspire du site themoviedb.org. Réalisé en équipe, nous
              avons utilisé les API proposées par le site. Nous avons également
              créé une fonctionnalité non présente sur le site initial : en
              indiquant votre année de naissance, vous avez la possibilité de
              connaitre le film ayant eu le plus de succès cette année mais
              également d'avoir une rétrospective des films qui ont pu marqué
              l'année de vos 5, 10, 15 ans ...
            </p>
            <p className="md:ml-4">
              Pour y accéder,{" "}
              <a href="https://cinereact.cdnsamuel.fr/">cliquez ici 🎬.</a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="text-3xl mt-8 mb-2">Tuum Vehiculum</h3>
            <div className="md:hidden">
              <img
                src={tuumAccueil}
                alt="Accueil du projet 1"
                className="mt-2 md:mt-8"
              />
            </div>
            <p className="mt-4 md:mt-0">
              Ce projet a été réalisé dans le cadre du 1er hackathon de notre
              formation. Nous avons eu 24 heures pour le créer. L'objectif était
              d'emmener la technologie d'aujourd'hui au Moyen-Âge. Nous avons
              ainsi créé un site qui permet de commander une course avec
              possibilité de choix de la destination, du véhicule.
            </p>
          </div>
          <div className="hidden md:block md:w-[1000px] md:h-56 md:overflow-hidden md:hover:overflow-y-scroll">
            <img
              src={tuumAccueil}
              alt="Accueil du projet 1"
              className="mt-8 ml-4"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mt-8 md:text-2xl">
          Et encore d'autres à venir ! 😉
        </h3>
      </div>
      <div className="mx-8 md:mx-16">
        <h2 className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-24 md:mb-12">
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
          className="font-bold text-2xl mt-8 mb-6 md:text-4xl md:mt-24 md:mb-12"
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
    </div>
  );
}

export default Home;
