import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "Hani",
    city: "Garissa",
    bio: "I love building web applications",
    color: "blue",
    links: {
      github: "https://github.com/hanidumale",
      linkedin: "https://linkedin.com/in/hanidumale"
    }
  };

  return (
    <div>
      <nav>
        <Home 
          id="home"
          name={user.name} 
          city={user.city} 
          color={user.color} 
        />
        <About 
          id="about"
          bio={user.bio} 
          links={user.links} 
        />
      </nav>
    </div>
  );
}

export default App;