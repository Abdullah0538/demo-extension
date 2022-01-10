
import "./App.css";
import NavHeader from "./components/NavHeader/NavHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import Section from "./components/Section/Section";
import RecentExperiences from "./components/RecentExperiences/RecentExperiences";

import PopularCategories from "./components/PopularCategories/PopularCategories";

function App() {
  return (
    <>
      <NavHeader />
      <SearchBar />
      <Section title={"Recent Experiences"}>
        <RecentExperiences />
      </Section>
      <Section title={"Popular Categories"} seeAll={true}>
          <PopularCategories />
      </Section>
    </>
  );
}

export default App;

