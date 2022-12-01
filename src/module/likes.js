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

export const addLike = async (id, likes) => {
  try {
    await fetch(urlLike, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `item${id}`,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    updateLikes(id, likes);
  } catch (e) {
    return e.message;
  }
  return '';
};
