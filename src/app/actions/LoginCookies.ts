'use server'
 
import { cookies } from 'next/headers'
 
const create = async (data: string) => {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('Login Token', data, { expires: Date.now() - oneDay })
}

export default create;