import React from "react";
import Head from "../../helpers/Head";
import useFetch from "../../hooks/useFetch.jsx";
import { STATS_GET } from "../../api";
import Loading from "../../helpers/Loading.jsx";
import Error from "../../helpers/Error.jsx";
const UserStatsGraph = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!loading && data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
