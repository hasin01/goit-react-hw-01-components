import css from './Statistics.module.css';
import PropTypes from 'prop-types';

// [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]
  
// { id, label, location, percentage,}


const newColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.7 +
      ')';
  return color;
};

      export const Statistics = ({ title, stats }) => {
        return (
          <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
      
            <ul className={css.stats__list}>
              {stats.map(({ id, label, percentage }) => {
                return (
                  <li
                    className={css.stats}
                    key={id}
                    style={{ backgroundColor: newColor() }}
                  >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      };
      Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          }),
        ),
      };
      export default Statistics;