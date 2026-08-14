import styles from "./styles.module.css";

export default function BlogTable({ data, settings = {} }) {
  if (!data || data.enabled === false || !Array.isArray(data.headers) || data.headers.length === 0 || !Array.isArray(data.rows) || data.rows.length === 0) {
    return null;
  }

  const variant = settings.variant || "striped";
  const headerStyle = settings.headerStyle || "brand_sky";
  const alignment = settings.alignment || "left";

  const sectionClassName = [
    styles.block,
    styles[`variant_${variant}`] || "",
    styles[`align_${alignment}`] || ""
  ].filter(Boolean).join(" ");

  const headerClassName = styles[`headerStyle_${headerStyle}`] || styles.headerStyle_brand_sky;

  return (
    <section id={data.id} className={sectionClassName}>
      {data.heading ? <h2>{data.heading}</h2> : null}
      {data.content ? <p className={styles.description}>{data.content}</p> : null}

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {data.headers.map((header, index) => (
                <th key={index} scope="col" className={headerClassName}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
