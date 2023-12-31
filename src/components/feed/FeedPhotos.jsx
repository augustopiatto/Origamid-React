import React from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setInfinite, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!loading && data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
