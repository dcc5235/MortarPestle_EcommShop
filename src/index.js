// ROUTER
window.onload = () => {
  const body = document.getElementById('body');

  const activeRoutes = Array.from(document.querySelectorAll('[route]'));
  function navigate(event) {
    let route = event.target.attributes[0].value;
    let routeInfo = myFirstRouter.routes.filter(routers => {
      return routers.path === route;
    })[0];
    if (!routeInfo) {
      window.history.pushState({}, '', 'error')
      body.innerHTML = '404 ERROR: PAGE NOT FOUND';
    } else {
      window.history.pushState({}, 'name', routeInfo.path);
      window.location.pathname = '../products.html';
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
    name: 'Root'
  },
  {
    path: '/products',
    name: 'Products'
  },
  {
    path: '/checkout',
    name: 'Checkout'
  }
]);

