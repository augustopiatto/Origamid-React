import React from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../../helpers/Error.jsx";
import Loading from "../../helpers/Loading.jsx";
import PhotoContent from "../../components/Photo/PhotoContent.jsx";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response, json } = request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div className={styles.modal} onClick={handleOutsideClick}>
        <PhotoContent data={data} />;
      </div>
    );
  else return null;
};

export default FeedModal;
