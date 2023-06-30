import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    setError({});
    setLoading(true);
    try {
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      setData({});
      setError({ erro: 'error' });
    } finally {
      setTimeout(() => {
        setData(json);
        setLoading(false);
      }, 1000);
      return { response, json };
    }
  }, []);

  return { data, error, loading, request, setData };
};

export default useFetch;
