// import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
// import Form from "react-bootstrap/Form";

const Slotm = () => {
  let x = ":happy";
  let y = ":happy";
  let z = ":happy";
  if (x === y && y === z) {
    return (
      <>
        <div>
          <h2 className="h1-title">
            {x}
            {y}
            {z}
          </h2>
          <p className="border border-secondary text-success text-center bg-warning py-3 rounded-circle">
            This Is Matching
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h2 className="h1-title">
            {x}
            {y}
            {z}
          </h2>
          <p className="border border-secondary text-primary text-center bg-warning py-3 rounded-circle">
            This Is Not Matching
          </p>
        </div>
      </>
    );
  }
};

function App() {
  return (
    <>
      <Container>
        <h1 className="h1-title">Hello Slot Machine</h1>
        <p className="border border-secondary text-danger text-center bg-warning py-3 rounded-circle">
          Slot Machine Game
        </p>
        <div className="card w-50">
          <Slotm />
        </div>
      </Container>
    </>
  );
}

export default App;
