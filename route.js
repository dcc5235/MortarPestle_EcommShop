
// ROUTER (NEED TO REFACTOR AND COMBINE W/INDEX.JS FILE IN SRC)
window.onload = () => {
  const activeRoutes = Array.from(document.querySelectorAll('[route]'));
  function navigate(event) {
    let route = event.target.attributes[0].value;
    let routeInfo = myFirstRouter.routes.filter(function (routers) {
      return routers.path === route;
    })[0];
    if (!routeInfo) {
      window.history.pushState({}, '', 'error')
      window.location.pathname = './src/pages/checkout/checkout.html'
    }
  };

  activeRoutes.forEach(route => {
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
