function Home({ name, city, color }) {
  return (
    <h1 style={{ color: color }}>
      {name} is a Web Developer from {city}
    </h1>
  );
}

export default Home;