export const formatGiphy = (arrGifs) => {
  const arrModify = arrGifs.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      image: gif.images.original.url,
    };
  });
  // console.log(arrModify)
  return arrModify;
};