import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const Stats = () => {
  const { stats } = HOME_CONTENT;

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsFrame}>
        {stats.map((stat, index) => (
          <div key={stat.id} className={styles.statGroup}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>
                {stat.label.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < stat.label.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
            {index < stats.length - 1 && (
              <div className={styles.divider} aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
