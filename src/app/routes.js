const ROUTES = {
    post: (id) => `/posts/${id}/comments`,
    home: () => '/',
    profile: (name) => `/author/${name}`
  };
  
  export default ROUTES;