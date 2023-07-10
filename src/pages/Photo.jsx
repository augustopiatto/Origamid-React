import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Error from "../helpers/Error";
import Loading from "../helpers/Loading";
import PhotoContent from "../components/photo/PhotoContent";
import { PHOTO_GET } from "../api";

const Photo = () => {
  const { id } = useParams();

  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!loading && data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
