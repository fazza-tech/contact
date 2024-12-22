import Contact from "./Contact"

/**
 * Challenge (I'm sorry!): Add all the rest of the
 * data to the contact card instances. 😈
 */

function App() {
    return (
      <div className="contacts">
      <Contact
          img="./images/cat 1.jpeg"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
      />
      <Contact
          img="./images/felix.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
      />
      <Contact
          img="./images/cat 3.jpg"
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
      />
      <Contact 
          img="./images/cat 4.jpg"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
      />
  </div>
    )
}

export default App