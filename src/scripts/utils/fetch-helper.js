const postReview = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default postReview;
