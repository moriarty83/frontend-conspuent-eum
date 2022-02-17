const url = 'http://localhost:4000/api/v1/comments';

class Comments{

    static newComment = (data) => {
      return fetch(`${url}`, {
          method: "POST",
          headers: {
                authorization: `Bearer ${localStorage.uid}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      }).then((res) => res.json());
    }
}

export default Comments