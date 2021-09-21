import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setFavorite, deleteFavorite } from "../actions";

import '../assets/styles/components/Carouselitem.scss';
import playIcon from '../assets/static/play-icon.png'
import plusicon from '../assets/static/plus-icon.png';
import removeIcon from "../assets/static/remove-icon.png";


const CarouselItem = (props) => {
    const { isList, wasListed, id, cover, title, year, contentRating, duration } = props;

    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }

    let durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);

    if (durationMin < 10) {
        durationMin = '0' + durationMin;
    }
    if (durationSec < 10) {
        durationSec = '0' + durationSec;
    }

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            className="carousel-item__details--img"
                            src={playIcon}
                            alt="Play Icon" />
                    </Link>
                    {
                        wasListed ?
                            "" :
                            isList ?
                                <img
                                    className="carousel-item__details--img"
                                    src={removeIcon}
                                    alt="Remove Icon"
                                    onClick={() => handleDeleteFavorite(id)} />
                                :
                                <img
                                    className="carousel-item__details--img"
                                    src={plusicon}
                                    alt="Plus Icon"
                                    onClick={handleSetFavorite} />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`Year: ${year}`}</p>
                <p className="carousel-item__details--subtitle">{`Content rating: ${contentRating}`}</p>
                <p className="carousel-item__details--subtitle">{`Duration: ${durationMin}:${durationSec}`}</p>
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);