const configureAxios = () => {
  let config = {};
  const token = localStorage.getItem('token');

  if (token) {
    config.headers = { 'Authorization': `JWT ${token}` };
  }

  return config;
}

export default configureAxios;
