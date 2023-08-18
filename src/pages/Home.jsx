import logoAdecco from "../assets/images/logo-adecco.jpeg";
import logoSourcing from "../assets/images/logo-sourcing.jpeg";
import logoBoulanger from "../assets/images/logo_boulanger.png";
import logoLinkedin from "../assets/images/logo-linkedin.png";
import cineAccueil from "../assets/images/CineReact-Accueil.png";
import tuumAccueil from "../assets/images/TuunVehiculum-Accueil.png";
import technos from "../data";
import TechnoCard from "../components/technoCard";

function Home() {
  return (
    <div>
      <div className="bg-[url('./assets/images/background-zigzag.jpeg')] bg-cover h-96 md:h-128 ">
        <p className="text-3xl ml-2 pt-48 md:ml-28">PORTFOLIO</p>
        <h1 className="text-9xl font-source ml-28 mt-6">Claire Girard</h1>
        <div className="flex justify-between">
          <p className="text-5xl ml-28 mt-48"> DÉVELOPPEUSE WEB</p>
          <a
            href="#contact"
            className="text-4xl m-48 self-center  border-black border-b pb-1"
          >
            CONTACTEZ-MOI
          </a>
        </div>
      </div>
      <div className="mx-16">
        <h2 className="text-4xl mt-24 mb-12 font-bold">À propos de moi</h2>
        <div className="flex">
          <img
            src="../src/assets/images/woman.png"
            alt="image de femme"
            className="w-96 sm:w-40"
          />
          <div className="self-center ml-24 text-2xl">
            <p>
              Après 14 années d’expériences professionnelles, principalement
              dans le domaine du contrôle de gestion, j’ai entrepris une
              reconversion dans le développement web, l'univers numérique
              m'ayant toujours attiré.
            </p>
            <p className="mt-2">
              Grâce à mes différents postes occupés, j'ai pu développer un
              esprit d'analyse, de l'autonomie ainsi que des compétences en
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
        <h2 className="text-4xl mt-24 mb-12 font-bold">
          Mes expériences professionnelles
        </h2>
        <div className="grid grid-cols-4 grid-rows-2">
          <img src={logoAdecco} alt="Logo Adecco" className="w-48" />
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
            className="w-52 mt-6"
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
      <div className="flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/claire-girard-48590711b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          Pour en savoir plus, consultez mon profil LinkedIn
        </a>
        <img src={logoLinkedin} alt="Logo LinkedIn" className="w-10 ml-4" />
      </div>
      <div className="mx-16">
        <h2 className="text-4xl mt-24 mb-12 font-bold">Mes projets</h2>
        <div className="flex">
          <div className="w-[1000px] h-56 overflow-hidden hover:overflow-y-scroll">
            <img src={cineAccueil} alt="Accueil du projet 1" className="" />
          </div>
          <div>
            <h3 className="text-3xl ml-4 mb-2">CinéReact</h3>
            <p className="ml-4">
              Site internet réalisé dans le cadre de ma formation qui permet de
              retrouver des informations sur les films, séries et acteurs.
            </p>
            <p className="ml-4">
              Ce site s'inspire du site themoviedb.org. Réalisé en équipe, nous
              avons utilisé les API proposées par le site. Nous avons également
              créé une fonctionnalité non présente sur le site initial : en
              indiquant votre année de naissance, vous avez la possibilité de
              connaitre le film ayant eu le plus de succès cette année. Mais
              également d'avoir une petite rétrospective des films qui ont pu
              marqué votre vie.
            </p>
            <p className="ml-4">
              Pour y accéder,{" "}
              <a href="https://cinereact.cdnsamuel.fr/">cliquez ici.</a>
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <h3 className="text-3xl mt-8 mb-2">Tuum Vehiculum</h3>
            <p>
              Ce projet a été réalisé dans le cadre du 1er hackathon de notre
              formation. Nous avons eu 24 heures pour le créer. L'objectif était
              d'emmener la technologie d'aujourd'hui au Moyen-Âge. Nous avons
              ainsi créé un site qui permet de commander une course avec
              possibilité de choix de la destination, du véhicule.
            </p>
          </div>
          <div className="w-[1000px] h-56 overflow-hidden hover:overflow-y-scroll">
            <img src={tuumAccueil} alt="Accueil du projet 1" className="mt-8" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-8">
          Et encore d'autres à venir ! 😉
        </h3>
      </div>
      <div className="mx-16">
        <h2 className="text-4xl mt-24 font-bold mb-12">Technos</h2>
        <div className="grid grid-cols-2 grid-rows-5">
          {technos.map((t) => (
            <TechnoCard key={t.name} name={t.name} image={t.img} />
          ))}
        </div>
      </div>
      <div className="mx-16">
        <h2 className="text-4xl mt-24 mb-8 font-bold" id="contact">
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
