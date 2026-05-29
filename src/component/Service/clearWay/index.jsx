import styles from "./styles.module.css";

const ClearWay = () => {
  return (
    <section className={styles["clear-way"]} aria-labelledby="clear-way-title">
      <div className={styles["clear-way__inner"]}>
        <h1 id="clear-way-title" className={styles["clear-way__title"]}>
          A clearer way
          <br />
          to care for
          <br />
          your vision
        </h1>

        <div
          className={`${styles["clear-way__copy"]} ${styles["clear-way__copy--middle"]}`}
        >
          <p>
            Most people come in with a question about their vision: a change
            they have noticed, and what to do next.
          </p>
          <p>Our role is to provide them with the right answers.</p>
          <p>
            At Pixel Eye Hospital, we offer the full spectrum of ophthalmology
            services, from routine eye checks to advanced treatments and
            surgery.
          </p>
        </div>

        <div
          className={`${styles["clear-way__copy"]} ${styles["clear-way__copy--right"]}`}
        >
          <p>
            Each service is built around careful evaluation, precise diagnosis,
            and a treatment plan that fits you.
          </p>
          <p>
            We do not rush decisions, and do not overcomplicate them either.
          </p>
          <p>
            We explain what is happening, outline your options, and walk you
            through each step, so you can move ahead with clarity, confidence,
            and certainty.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClearWay;
