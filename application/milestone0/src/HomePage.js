import React from "react";
import "./HomePage.css";
import Developer from "./Developer";

function HomePage() {
  return (
    <div className="homePage" style={{ backgroundColor: "#000000" }}>
      <div
        className="developers"
        style={{
          display: "flex",
          width: "100vw",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Developer
          name="Himanshu Garg"
          role="Team Lead"
          bio="I am a Computer Science Junior at SFSU.
                I am currently working as a Teaching Assistant for CSC 220, CSC 210 and Instructor for SCI 211.
                I love to create web and android based applications."
          image={require("./images/himanshu.jpg")}
        />
        <Developer
          name="Milo Abril"
          role="Front-End Lead"
          bio="Hello World
                I am a Computer Science Senior at SFSU who was originally planning on obtaining a major in Digital Media.
                My plans are to be a developer for websites, applications, or video games."
          image={require("./images/Milo.jpg")}
        />
        <Developer
          name="Suman Basaula"
          role="Github Master"
          bio="Hi, I am a computer science junior at SF state. I am very interested in creating websites and web applications. I love playing sports and learning new languages."
          image={require("./images/suman.jpg")}
        />
        <Developer
          name="Marlon Bustamante"
          role="Back-End Lead"
          bio="Hello. I am a Computer Science senior. I enjoy tinkering with electronics and modifying existing code to suit my need.
                In my free time I enjoy reading comic books and watching movies."
          image={require("./images/marlon.JPG")}
        />
        <Developer
          name="Fifth Member"
          role="My Role"
          bio="My Bio"
          image={require("./images/no-pic.jpg")}
        />
        <Developer
          name="Sixth Member"
          role="My Role"
          bio="My Bio"
          image={require("./images/no-pic.jpg")}
        />
      </div>
    </div>
  );
}

export default HomePage;
