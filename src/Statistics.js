export default function Statistics({ title, stats }) {
  let h2 = '';
  console.log(title);
  if (title) {
    h2 = <h2 className="title">{title}</h2>;
  }
  const listItems = stats.map(stat => (
    <li key={stat.id} className="item">
      <span  className="label">{stat.label}</span>
      <span  className="percentage">{stat.percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      {h2}
      <ul className="stat-list">{listItems}</ul>
    </section>
  );
}
