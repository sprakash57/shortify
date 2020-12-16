import { WebUrl } from './web-url';

export interface WebUrlResponse extends WebUrl {
  updatedAt: string
  __v: number
  error?: string
}

export interface DeleteUrlResponse {
  message?: string
  error?: string
}