// CONTENTFUL
// const client = contentful.createClient({
//   space: "process.env.SPACE",
//   accessToken: "process.env.ACCESS_TOKEN"
// });

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
      window.location.pathname = './products/';
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
  },
  {
    path: '/gift',
    name: 'Gift'
  },
  {
    path: '/login',
    name: 'Log In'
  }
]);

  // const currentPath = window.location.pathname;
  // if (currentPath === '/') {

  // } else {
  //   const route = myFirstRouter.routes.filter(function (r) {
  //     return r.path === currentPath
  //   })[0];
  //   if (route) {
  //     window.location.pathname = './products/';
  //   } else {
  //     view.innerHTML = '404';
  //   }
  // }
// }
