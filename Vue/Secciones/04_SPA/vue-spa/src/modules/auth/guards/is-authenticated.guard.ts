import type {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
  NavigationGuardNext,
} from 'vue-router'

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
    const userId = localStorage.getItem('userId');
    localStorage.setItem('lastPath', to.path);
    console.log(to.path);

    if ( !userId ) {
        return next('/auth');
    }

  return next();
}

export default isAuthenticatedGuard;
