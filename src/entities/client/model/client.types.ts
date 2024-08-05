

export type Client = {
  client_id: number
  client_name: string
}

export type ClientState = {
  activeClient: Client | null
  setActiveClient: (client: Client | null) => void
}