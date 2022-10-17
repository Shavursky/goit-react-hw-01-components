import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {

  const listItems = stats.map(({label, percentage, id}) => (
    <li key={id} className="item">
      <span  className="label">{label}</span>
      <span  className="percentage">{percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}
      <ul className="stat-list">{listItems}</ul>
    </section>
  );
}


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}
