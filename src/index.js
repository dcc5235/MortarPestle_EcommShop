// ROUTER
window.onload = function () {
  const view = document.getElementById('view');

  const activeRoutes = Array.from(document.querySelectorAll('[route]'));
  function navigate(event) {
    let route = event.target.attributes[0].value;
    let routeInfo = myFirstRouter.routes.filter(function (r) {
      return r.path === route;
    })[0];
    if (!routeInfo) {
      window.history.pushState({}, '', 'error')
      view.innerHTML = '404 ERROR';
    } else {
      window.history.pushState({}, 'name', routeInfo.path);
      window.location.pathname = '../products.html';
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
    name: 'Root'
  },
  {
    path: '/products',
    name: 'Products'
  }
]);

