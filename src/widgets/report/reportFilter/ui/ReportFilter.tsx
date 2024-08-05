import styles from './reportFilter.module.scss'
import {FormProvider, useForm} from "react-hook-form";
import {ReportFilterForm} from "../model/reportFilter.types.ts";
import {CustomSelect} from "@shared/ui";
import {useAllClientsQuery} from "@entities/client/api/client.queries.ts";
import {useClientActions} from "@entities/client/model/client.selector.ts";
import {useMemo} from "react";



export const ReportFilter = () => {
  const {data, isLoading} = useAllClientsQuery()
  const {setActiveClient} = useClientActions()
  const methods = useForm<ReportFilterForm>()
  const clients = useMemo(() => {

    return data
      ? data.map(client => ({label: client.client_name, value: client.client_id}))
      : []
  },[data])

  return (
    <FormProvider {...methods}>
      <div className={styles.wrapper}>
        <CustomSelect
          loading={isLoading}
          name={'client'}
          data={clients}
          onChangeOutside={(id) => {
            const activeClient = data?.find(client => client.client_id === +id)
            if(activeClient) {
              setActiveClient(activeClient)
            }
          }}
        />

      </div>
    </FormProvider>

  )
}