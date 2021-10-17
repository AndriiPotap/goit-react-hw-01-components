import React from 'react';
import style from './Profile.module.css';
import Description from './Description/Description';
import Stats from './Stats/Stats';

const Profile = user => {
    return (
        <div className={style.profile}>
            <Description {...user} />
            <Stats {...user} />
        </div>
    );
};

export default Profile;