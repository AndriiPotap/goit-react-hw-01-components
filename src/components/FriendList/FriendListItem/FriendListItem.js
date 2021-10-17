import React from 'react';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const isOnlineStyle = isOnline ? style.online : style.offline;
    return (
        <li className={style.item}>
            <span className={isOnlineStyle}></span>
            <img className={style.avatar} src={avatar} alt={name} width="80" />
            <p className={style.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;