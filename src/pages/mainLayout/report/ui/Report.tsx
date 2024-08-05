import styles from './report.module.scss'
import {ReportFilter} from "@widgets/report/reportFilter";

export const Report = () => {
  return (
    <div className={styles.wrapper}>
      <ReportFilter/>
    </div>
  );
};
