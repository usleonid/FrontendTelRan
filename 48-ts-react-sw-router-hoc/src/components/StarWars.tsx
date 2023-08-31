import { navItems, starWarsInfo } from "../utils/constants";
import { withHeroId } from "../hoc/withHeroId";

const StarWars = () => {

  return (
    <div className="farGalaxy">
      <p>{starWarsInfo}</p>
    </div>
  );
};

export default withHeroId(navItems[2].route)(StarWars);
