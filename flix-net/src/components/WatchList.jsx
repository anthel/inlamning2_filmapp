import React from 'react'
import CardComponent from './CardComponent'


export default function WatchList() {
  return (
    <div className="wrapperWatchlist">
      <CardComponent
      title={"Joker"}
      plot={'"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."'}
      genre={"Crime, Drama, Thriller"}
      cast={"Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy"}
      >
      </CardComponent>
      <CardComponent>
        <h1>movie 2</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 3</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 4</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 5</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 6</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 7</h1>
      </CardComponent>
      <CardComponent>
        <h1>movie 8</h1>
      </CardComponent>
    </div>
  )
}
