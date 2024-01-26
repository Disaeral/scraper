import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await new Promise((resolve, reject) => {
  // @ts-expect-error test resolve for 1.5 secs remove in prod
  setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
