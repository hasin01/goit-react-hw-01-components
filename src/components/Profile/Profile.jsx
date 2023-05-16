import css from './Profile.module.css';
import PropTipes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={username} width="300" className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
  
        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };

Profile.propTipes = {
    username: PropTipes.string.isRequired,
    tag: PropTipes.string.isRequired, 
    location: PropTipes.string.isRequired, 
    avatar: PropTipes.string.isRequired,
    stats: PropTipes.exact({followers: PropTipes.number, views: PropTipes.number, likes: PropTipes.number})

}