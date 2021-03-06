import React from 'react';
import { IFullMovieInfo } from '../../interfaces';


interface IProps {
   isError: boolean,
   handleCloseButtonClick: () => void,
   data: IFullMovieInfo
}

export const FullMovieInfo: React.FC<IProps> = (props) => {
   if (props.isError) {
      return (
         <>
            <button
               className="movie__close-full-info-button"
               onClick={props.handleCloseButtonClick}
            >&#10008;</button>
            <div className="error-message error-message_size_small">Check your connection</div>
         </>
      )
   }


   const data = props.data;

   let ratings: JSX.Element[] = data.Ratings.map((rating) => (
      <span key={rating.Source}>
         {rating.Source}:{' '}
         <span className='movie__rating'>{rating.Value}</span>{', '}
      </span>
   ))
   

   return (
      <>
         <button
            className="movie__close-full-info-button"
            onClick={props.handleCloseButtonClick}
         >&#10008;</button>

         <div className="movie__runtime movie__label">{data.Runtime}</div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">{data.Plot === 'N/A' ? 'Plot: ' : ''}</span>
            {data.Plot}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Genre: </span>
            {data.Genre}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Released: </span>
            {data.Released}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Actors: </span>
            {data.Actors}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Director: </span>
            {data.Director}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Box office: </span>
            {data.BoxOffice}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Awards: </span>
            {data.Awards}
         </div>
         <div className="movie__common-info">
            <span className="movie__common-info-title">Ratings: </span>
            {ratings.length ? ratings : 'N/A'}
         </div>
      </>
   )
}