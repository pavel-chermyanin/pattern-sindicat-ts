import moment from "moment/moment";
import {Drawer} from "rsuite";

import {DateFormat} from "@shared/consts";
import {GraphView} from "@entities/graph";

import styles from './reportListDrawer.module.scss'
import {useGraphStore} from "@entities/graph/model/graph.store.ts";

type ReportListDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ReportListDrawer = ({open, setOpen}: ReportListDrawerProps) => {
  const {setActiveGraph, activeGraph} = useGraphStore()

  const formatDate = (isoDateString: string) => {
    return moment(isoDateString).format(DateFormat.D_MMMM_YYYY);
  };

  const handleClose = () => {
    setOpen(false)
    setActiveGraph(null)
  }
  return (
    <Drawer className={styles.wrapper} open={open} onClose={handleClose}>
      <Drawer.Header className={styles.header}>
        {activeGraph?.reportName}
      </Drawer.Header>
      <Drawer.Body>
        <div className={styles.info}>
          <p className={styles.label}>
            <span>Автор:</span>
            <span>{activeGraph?.authorName ? activeGraph?.authorName : 'Автор не указан'}</span>
          </p>
          <p className={styles.label}>
            <span>Дата создания:</span>
            <span>{formatDate(activeGraph?.createdAt!)}</span>
          </p>
        </div>
        <GraphView activeGraph={activeGraph}/>
      </Drawer.Body>
    </Drawer>
  )
}