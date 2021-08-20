import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Projects from "./components/pages/Projects";

// Project components
import WhoCaresIfItsBuggy from "./components/projects/WhoCaresIfItsBuggy";
import WhyDoesNoOneLoveMe from "./components/projects/WhyDoesNoOneLoveMe";
import ClimbPrincessClimb from "./components/projects/ClimbPrincessClimb";
import Experiments from "./components/projects/Experiments";
import Simpli from "./components/projects/Simpli";
import PortfolioSite from "./components/projects/PortfolioSite";
import ShankTheWorld from "./components/projects/ShankTheWorld";
import BindingOfISaac2 from "./components/projects/BindingOfISaac2";
import OneInOneOut from "./components/projects/OneInOneOut";
import NetworkingLibrary from "./components/projects/NetworkingLibrary";
import Screeps from "./components/projects/Screeps";
import CatCatMagicAttack from "./components/projects/CatCatMagicAttack";
import Givey from "./components/projects/Givey";
import Nuwave from "./components/projects/Nuwave";
import FlappyKyata from "./components/projects/FlappyKyata";
import GrandmasSpecialBoy from "./components/projects/GrandmasSpecialBoy";

// Font awesome setup
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
  return (
    <>
    <Router>
      <Container fluid className="main">

        {/* Adds page header to all pages */}
        <Header />

        <Container>
          <Row className="justify-content-center">
            {/* Registers route listeners */}
            <Switch>
              <Route path="/" exact component={() => <Projects />} />
              <Route path="/projects" exact component={() => <Projects />} />

              {/* Projects */}
              <Route path="/projects/who-cares-if-its-buggy" exact component={() => <WhoCaresIfItsBuggy />} />
              <Route path="/projects/experiments" exact component={() => <Experiments />} />
              <Route path="/projects/why-does-no-one-love-me" exact component={() => <WhyDoesNoOneLoveMe />} />
              <Route path="/projects/climb-princess-climb" exact component={() => <ClimbPrincessClimb />} />
              <Route path="/projects/simpli" exact component={() => <Simpli />} />
              <Route path="/projects/portfolio-site" exact component={() => <PortfolioSite />} />
              <Route path="/projects/shank-the-world" exact component={() => <ShankTheWorld />} />
              <Route path="/projects/binding-of-isaac-2" exact component={() => <BindingOfISaac2 />} />
              <Route path="/projects/one-in-one-out" exact component={() => <OneInOneOut />} />
              <Route path="/projects/networking-library" exact component={() => <NetworkingLibrary />} />
              <Route path="/projects/screeps" exact component={() => <Screeps />} />
              <Route path="/projects/cat-cat-magic-attack" exact component={() => <CatCatMagicAttack />} />
              <Route path="/projects/givey" exact component={() => <Givey />} />
              <Route path="/projects/nuwave" exact component={() => <Nuwave />} />
              <Route path="/projects/flappy-kyata" exact component={() => <FlappyKyata />} />
              <Route path="/projects/grandmas-special-boy" exact component={() => <GrandmasSpecialBoy />} />
            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
    </>
  );
}

export default App;
