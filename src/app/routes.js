const ROUTES = {
    post: (id) => `/posts/${id}/comments`,
    home: () => '/',
    profile: (name) => `/author/${name}`,
    error: () => '/error-not-found'
};
  
export default ROUTES;