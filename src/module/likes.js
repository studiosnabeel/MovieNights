const urlLike = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${process.env.API_KEY}/likes/`;

export const updateLikes = async (id, likes) => {
  try {
    const response = await fetch(urlLike);
    const data = await response.json();
    data.filter((item) => {
      if (item.item_id === `item${id}`) {
        likes.innerHTML = `${item.likes} likes`;
      } else {
        return '';
      }
      return '';
    });
  } catch (e) {
    return e.message;
  }
  return '';
};
