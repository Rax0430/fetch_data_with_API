const catapi = "https://api.thecatapi.com/v1/images/search?limit=10";

export const getCatAPI = async () => {
  //async - to have access in await

  const response = await fetch(catapi, {
    //await - waiting to finish the process //fetch getting where the data come from

    method: "GET", //GET - getting data
  });

  const res = await response.json();
  console.log(res);
  return res;
};
