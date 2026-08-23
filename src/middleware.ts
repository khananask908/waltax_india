import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/login(.*)',
  '/signup(.*)',
  '/admin-login(.*)',
  '/admin(.*)',
  '/about(.*)',
  '/contact(.*)',
  '/pricing(.*)',
  '/services(.*)',
  '/blog(.*)',
  '/privacy-policy(.*)',
  '/terms-conditions(.*)',
  '/refund-policy(.*)',
  '/gst(.*)',
  '/mca(.*)',
  '/income-tax(.*)',
  '/compliance(.*)',
  '/startups(.*)',
  '/hire-team(.*)',
  '/api(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return;
  }

  const { userId } = await auth();

  if (!userId) {
    return Response.redirect(new URL('/login', req.url));
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
