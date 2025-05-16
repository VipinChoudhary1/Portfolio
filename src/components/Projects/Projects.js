import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import amazon from "../../Assets/Projects/amazon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TicTacToe Game"
              description="A web based version of the classic Tic Tac Toe Game made using the HTML, CSS and JS."
              ghLink="https://github.com/VipinChoudhary1/Tic-Tac-Toe-Game"
              demoLink="https://tic-tac-toe-game-weld-iota.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon HomePage Clone"
              description="Created HomePage of the Amazon.com using HTML and CSS only."
              ghLink="https://github.com/VipinChoudhary1/Tic-Tac-Toe-Game"
              demoLink="https://amazon-home-page-clone-pied.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
