import React from 'react';
import PropTypes from 'prop-types';
import style from './Description.module.css';
import avatarIMG from '../../../img/not_avatar.jpg';

const Description = ({ name, tag, location, avatar }) => {
    return (
        <div className={style.description}>
            <img src={avatar} alt={name} />
            <p className={style.name}>{name}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>
    );
};

Description.defaultProps = {
    avatar: avatarIMG,
};

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Description;