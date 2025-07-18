const Badges = () => {
  const badges = [
    {
      title: "GitHub Foundations",
      items: [
        "GitHub Foundations",
        "TEEM",
        "DEMinware Resource",
        "COMBINER",
        "GSM",
        "Data Analytics Essentials",
        "MD Days Belays #2013",
        "Last Costs"
      ]
    },
    {
      title: "Top 5% SB LastCosts",
      items: [
        "LastCosts: 75 LastCosts",
        "Pull Start Global",
        "Avatar Cash Vault Contributor Global"
      ]
    }
  ];

  return (
    <section id="badges" className="section">
      <div className="container">
        <h2 className="section-title">Coding <span>Badges</span></h2>
        <p className="section-subtitle">Milestones that reflect the journey of continuous growth and mastery.</p>
        
        <div className="badges-container">
          {badges.map((badgeGroup, index) => (
            <div key={index} className="badge-group">
              <h3>{badgeGroup.title}</h3>
              <div className="badges-list">
                {badgeGroup.items.map((item, i) => (
                  <div key={i} className="badge">
                    <i className="fas fa-award"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;