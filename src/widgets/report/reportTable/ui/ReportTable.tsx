import {useAllGraphsQuery, useGraphActions,Graph} from "@entities/graph";

const {Column, HeaderCell, Cell} = Table;
import styles from './reportTable.module.scss'

import {Button, Loader, Table} from "rsuite";
import moment from "moment";

import 'moment/locale/ru';
import {DateFormat} from "@shared/consts";


export const ReportTable = () => {
  const {data, isLoading} = useAllGraphsQuery()
  const {setActiveGraph,setOpenGraphDrawer} = useGraphActions()

  const formatDate = (isoDateString: string) => {
    return moment(isoDateString).format(DateFormat.D_MMMM_YYYY);
  };

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader size="md" content="Загрузка"/>
      </div>
    )
  }
  const onClickPreview = (rowData: Graph) => {
    setActiveGraph(rowData)
    setOpenGraphDrawer(true)
  }

  return (
    <div className={styles.wrapper}>
      <Table height={420} data={data}>
        <Column width={50} align="center">
          <HeaderCell>№</HeaderCell>
          <Cell dataKey="index"/>
        </Column>

        <Column width={200}>
          <HeaderCell>Название отчета</HeaderCell>
          <Cell dataKey="reportName"/>
        </Column>

        <Column width={150}>
          <HeaderCell>Дата создания</HeaderCell>
          <Cell>
            {(rowData) => formatDate(rowData.createdAt)}
          </Cell>
        </Column>

        <Column width={100}>
          <HeaderCell>Описание</HeaderCell>
          <Cell dataKey="description"/>
        </Column>

        <Column width={100}>
          <HeaderCell>Автор</HeaderCell>
          <Cell dataKey="authorName"/>
        </Column>
        <Column width={200}>
          <HeaderCell>Ссылка на отчет</HeaderCell>
          <Cell>
            {(rowData: Graph) => (
              <Button appearance="link" onClick={() => onClickPreview(rowData)} className={styles.openCanvasBtn}>
                Предпросмотр графика
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  )
}