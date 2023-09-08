import { Component } from "react";
//Componente clase
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0, //inicializamos en 0
    };
  }
  render() {
    return (
      <div>
        Class Component
        <p>
          <button
            onClick={() => this.setState({ contador: this.state.contador - 1 })}
          >
            {" "}
            -{" "}
          </button>
          {this.state.contador}
          <button
            onClick={() => this.setState({ contador: this.state.contador + 1 })}
          >
            {" "}
            +{" "}
          </button>
        </p>
      </div>
    );
  }
}

export default ClassComponent;
