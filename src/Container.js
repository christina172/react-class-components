import React, {Component} from "react";
import axios from 'axios';
import styles from './Container.module.css';

import {Card} from './Card';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.page}`)
          .then(response => {
            this.setState({characters: response.data.results})
          })
          .catch(error => {
            console.log(error);
            this.setState({errorMsg: 'Error retreiving data'})
          })
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.page}`)
                .then(response => {
                    this.setState({characters: response.data.results})
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retreiving data'})
                });
            window.scrollTo(0, 0);
        }
    }

    render() {
        const {characters, errorMsg} = this.state;

        return (
            <div className={styles.container}>
                {characters.length
                    ? characters.map((character) => <Card key={character.id} character={character} />)
                    : null
                }
                {errorMsg ? <h2>{errorMsg}</h2> : null} 
            </div>
        )
    }
}

export {Container};