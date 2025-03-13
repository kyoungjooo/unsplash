import styles from "./images.module.scss";
export default function ImagesContainer({ pages }) {
  const imagesDataArray = pages?.map((page) => [page?.results]).flat(2);

  return (
    <>
      {imagesDataArray?.map((imageData) => (
        <img src={imageData.urls.small} />
      ))}
    </>
  );
}
