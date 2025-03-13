import styles from "./image.module.scss";
export default function Image({ slicedArr }) {
  //   const { urls, alt_description } = image;
  console.log(slicedArr);
  //   const chunkCount = 3;
  //   const chunkSize = Math.ceil(image.length / chunkCount);
  //   console.log(chunkSize);

  return (
    <>
      {slicedArr.map((lists, index) => (
        <div key={index} className={styles.image}>
          {lists.map((list) => (
            <img
              key={list.id}
              src={list.urls.small}
              alt={list.alt_description}
            />
          ))}
        </div>
      ))}
    </>
  );
}
