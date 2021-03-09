
// ROUTER (NEEDS CLEAN UP)
window.onload = function () {
  const activeRoutes = Array.from(document.querySelectorAll('[route]'));
  function navigate(event) {
    let route = event.target.attributes[0].value;
    let routeInfo = myFirstRouter.routes.filter(function (r) {
      return r.path === route;
    })[0];
    if (!routeInfo) {
      window.history.pushState({}, '', 'error')
      window.location.pathname = './src/pages/checkout/checkout.html'
    }
  };

  activeRoutes.forEach(function (route) {
    route.addEventListener('click', navigate, false);
  });
};

const Router = function (name, routes) {
  return {
    name: name,
    routes: routes
  }
};

const myFirstRouter = new Router('myFirstRouter', [
  {
    path: '/',
    name: 'Route'
  },
  {
    path: '/checkout',
    name: 'Checkout'
  },
  {
    path: '/products',
    name: 'Products'
  }
]);
