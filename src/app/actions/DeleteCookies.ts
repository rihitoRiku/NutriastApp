'use server'
 
import { cookies } from 'next/headers'
import toast from 'react-hot-toast';
 
async function create(data: string) {
  cookies().delete(data);
}

export default create;