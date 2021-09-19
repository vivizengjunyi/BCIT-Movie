import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSearch from '../pages/PageSearch';
import PageSingleMovie from '../pages/PageSingleMovie';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" exact><PageHome /></Route>
            <Route path="/index.html" exact><PageHome /></Route>
            <Route path="/sort/:categoryId"><PageHome /></Route>
            <Route path="/about"><PageAbout /></Route>
            <Route path="/favs"><PageFavs /></Route>
            <Route path="/search"><PageSearch /></Route>
            <Route path="/movie/:id"><PageSingleMovie /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;