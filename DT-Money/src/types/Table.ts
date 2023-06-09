export type Table = {
  id: number,
  description: string,
  type: string,
  category: string,
  price: number,
  createdAt: string
}

export type Form = {
  description: string,
  price: number | null,
  category: string,
  type: string
}

