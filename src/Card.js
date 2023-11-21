import React, {Component} from "react";
import styles from './Card.module.css';

class Card extends Component {

    render() {
        return (
            <div className={styles.card}>
              <img src={this.props.character.image} alt={`${this.props.character.name} profile picture`}/>
              <h2>{this.props.character.name}</h2>
            </div>  
        )
    }
}

export {Card};