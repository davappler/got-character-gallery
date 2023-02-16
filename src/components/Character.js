import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ family, fullName, imageUrl, title }) => {
    return (
        <div data-test='character-card' className="card-container">
            <img data-test='character-image' src={imageUrl} alt={fullName} />
            <div data-test='character-body' className="card-body">
                <h1 data-test='character-content'>{title} {fullName} of {family}</h1>
            </div>
        </div>
    );
};

Character.propTypes = {
    family: PropTypes.string,
    fullName: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
}

export default Character;