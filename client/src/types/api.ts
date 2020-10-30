import { WebUrl } from './web-url';

export interface WebUrlResponse extends WebUrl {
  updatedAt: string
  __v: number
  _id: string
  error?: string
}