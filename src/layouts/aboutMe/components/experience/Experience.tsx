import styles from "./Experience.module.scss";

type Props = {
  startDate: string;
  endDate: string;
  experienceTitle: string;
  info: string;
};
const Experience = ({
  startDate,
  endDate,
  experienceTitle,
  info,
}: Props): JSX.Element => {
  return (
    <>
      <div className={styles.experienceBox}>
        <p className={styles.date}>
          {startDate} - {endDate}
        </p>
        <p className={styles.title}>{experienceTitle}</p>
        <p className={styles.info}>{info}</p>
      </div>
    </>
  );
};

export default Experience;
