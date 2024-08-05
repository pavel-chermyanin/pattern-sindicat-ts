
import {ReportListDrawer} from "@widgets/report/reportListDrawer";
import {ReportTable} from "@widgets/report/reportTable";

import styles from './reportList.module.scss'
import {useGraphStore} from "@entities/graph/model/graph.store.ts";


export const ReportList = () => {
  const {openGraphDrawer,setOpenGraphDrawer} = useGraphStore()
  return (
    <div className={styles.wrapper}>
     <ReportTable/>
      {/*<Button onClick={() => setOpenGraphDrawer(!openGraphDrawer)}>og</Button>*/}
      <ReportListDrawer open={openGraphDrawer} setOpen={setOpenGraphDrawer}/>
    </div>
  )
}