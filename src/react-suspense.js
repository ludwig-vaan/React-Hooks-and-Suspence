/**
 * Many components in your application will need data that has to be fetched over the network. When that data is loaded, however, you don't want to make a network request because you have the data stored in cache in the browser.
 * In this lesson, you will learn
 * throw a Promise
 * catch that Promise with Suspense
 * render that data to the browser after its loaded
 * add that data to cache
 */

import React, { useState, Suspense } from 'react';
import fetchPokemon from './fetch-pokemon';

const cache = {};

function PokemonInfo({ pokemonName }) {
    const pokemon = cache[pokemonName];
    if (pokemon === undefined) {
        const promise = fetchPokemon(pokemonName).then(
            p => (cache[pokemonName] = p)
        );

        throw promise;
    }
    return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>;
}

function pokemonApp() {
    const [pokemonName, setPokemonName] = useState(null);
    function handleSubmit(e) {
        e.preventDefault();
        setPokemonName(e.target.elements.pokemonName.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pokemonName-input">
                    Pokemon Name (ie Pikachu)
                </label>
                <input id="pokemonName-input" name="pokemonName" />
                <button type="submit">Submit</button>
            </form>
            <div>
                {pokemonName ? (
                    <Suspense fallback={<div>loading...</div>}>
                        <PokemonInfo pokemonName={pokemonName} />
                    </Suspense>
                ) : null}
            </div>
        </div>
    );
}

export default pokemonApp;
