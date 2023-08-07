'use server';

import { cookies } from 'next/headers';

const create = async (data: string) => {
  // Set the cookie to expire in one day from the current time
  const oneDay = 24 * 60 * 60 * 1000;
  const expirationDate = Date.now() + oneDay;

  // Set the "Login Token" cookie in the response headers
  cookies().set('Login Token', data, { expires: expirationDate });

  // Note: The following console.log won't display the cookie in the response,
  // since cookies are part of the response headers and not accessible here.
  console.log(cookies().get('Login Token'));
};

export default create;
