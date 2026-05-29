import style from "./styles.module.css"

const Title = ({ title_line }) => {
  return (
    <div className={style?.title}>
      <h3>{title_line}</h3>
    </div>
  );
};

export default Title;
