import { PUBLIC_APR_URL } from '$env/static/public';
import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {

  let path = event.url?.pathname;
  
  if(!path.startsWith('/api')) {
    return Response.redirect(event.url.origin+"/login", 303);

  }

};

