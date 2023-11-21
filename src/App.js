import React, {Component} from "react";
import './App.css';
import { Container } from './Container';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }

  goToPrev = () => {
    if (this.state.page > 1) {
        this.setState((state)=> ({page: state.page - 1}))
    }
  }

  goToNext = () => {
      if (this.state.page < 42) {
          this.setState((state)=> ({page: state.page + 1}))
      }
  }

  render() {
    const {page} = this.state;
    return (
      <div className="App">
        <main>
          <h1>Rick and Morty Characters</h1>
          <Container page={page}/>
          <nav>
            {(page > 1)
              ? <button onClick={this.goToPrev}>Prev</button>
              : null}
            <p>{page}</p>
            {(page < 42) 
              ? <button onClick={this.goToNext}>Next</button>
              : null}
          </nav>
        </main>
      </div>
    );
  }
}

export default App;
