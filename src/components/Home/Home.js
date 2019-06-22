import React from 'react';
import SearchField from '../SearchField/SearchField';
import PokeList from '../PokeList/PokeList';
import './Home.scss';


class Home extends React.Component {
    render() {
        const {pokemons, inputValue, handleInputValue}= this.props;

        return (
            <React.Fragment>
                <SearchField handleInputValue={handleInputValue} inputValue={inputValue} />
                <PokeList pokemons={pokemons} inputValue={inputValue} />
                <div className="link__top">
                <a href="/" className="link">⇧</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;