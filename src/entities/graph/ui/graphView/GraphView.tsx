import {Graph} from "@entities/graph";
import styles from './graphView.module.scss'

export const GraphView = ({activeGraph}: {activeGraph: Graph | null}) => {

  if(!activeGraph) {
    return  null
  }

  return (
    <div className={styles.wrapper}>
      <iframe
        title={activeGraph && activeGraph.reportName}
        width="100%"
        height="400"
        seamless
        frameBorder="0"
        scrolling="no"
        src={activeGraph && activeGraph.link }
      >
      </iframe>
    </div>
  )
}