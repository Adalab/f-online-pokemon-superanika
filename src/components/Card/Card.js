import React from 'react';
import './Card.scss';

class Card  extends React.Component {
    render () {
        const {item} = this.props;
        return (
            <div className="card__wrapper">
                 <div className={item.types.length === 2 ? `img__container ${item.types[0].type.name}-${item.types[1].type.name}` : `img__container ${item.types[0].type.name}`}>
                  <img src={item.sprites.front_default} alt={item.name} className="pokemon__img"/>
                  <p className="pokemon__id">ID/{item.id}</p>
                </div>
                <div className="info__container">
                  <h2 className="pokemon__name">{item.name}</h2>
                  <ul className="types__list">
                  {item.types.map((item, index) => {
                    switch(item.type.name) {
                      case 'grass': 
                         return  <li className="type__item" key={index}><span role="img" aria-label="grass" title="grass">🌱</span></li>
                      case 'poison':
                          return  <li className="type__item" key={index}><span role="img" aria-label="poison" title="poison">💀</span></li>
                      case  'bug':
                          return  <li className="type__item" key={index}><span role="img" aria-label="bug" title="bug">🐛</span></li>
                      case 'fire':
                          return  <li className="type__item" key={index}><span role="img" aria-label="fire" title="fire">🔥</span></li>
                      case 'flying':
                          return  <li className="type__item" key={index}><span role="img" aria-label="flying" title="flying">✈️</span></li>
                      case 'normal':
                          return  <li className="type__item" key={index}><span role="img" aria-label="normal" title="normal">🙂</span></li>
                      case 'water':
                          return  <li className="type__item" key={index}><span role="img" aria-label="water" title="water">💧</span></li>
                      case 'electric':
                          return  <li className="type__item" key={index}><span role="img" aria-label="electric" title="electric">⚡️</span></li>
                      default:
                          return  <li className="type__item" key={index}>{item.type.name}</li>
                    } 
                  })}
                  </ul>
                </div>
            </div>
        );
    }
}

export default Card;