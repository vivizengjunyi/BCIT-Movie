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
            <Route path="/gomovie/" exact><PageHome /></Route>
            <Route path="/gomovie/index.html" exact><PageHome /></Route>
            <Route path="/gomovie/sort/:categoryId"><PageHome /></Route>
            <Route path="/gomovie/about"><PageAbout /></Route>
            <Route path="/gomovie/favs"><PageFavs /></Route>
            <Route path="/gomovie/search"><PageSearch /></Route>
            <Route path="/gomovie/movie/:id"><PageSingleMovie /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;