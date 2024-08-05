
export type Graph = {
  index: number
  id:number
  reportName:string
  authorName:null
  link: string
  description:null
  createdAt: string
}


export type GraphState = {
  openGraphDrawer: boolean,
  setOpenGraphDrawer: (bool: boolean) => void;

  activeGraph: Graph | null
  setActiveGraph: (activeGraph: Graph | null) => void
}