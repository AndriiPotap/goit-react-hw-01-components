import React from 'react';
import style from './Stats.module.css';

const Stats = ({ stats }) => {
    const { followers, views, likes } = stats;
    return (
        <ul className={style.stats}>
            <li>
                <span>Followers</span>
                <span className={style.quantity}>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span className={style.quantity}>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span className={style.quantity}>{likes}</span>
            </li>
        </ul>
    );
};

export default Stats;