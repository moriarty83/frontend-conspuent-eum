const url = 'https://outtapocket-backend.herokuapp.com/api/v1/comments';

class Comments{

    static newComment = (data) => {
      console.log("ID")
      console.log(data)
      return fetch(`${url}`, {
          method: "POST",
          headers: {
                authorization: `Bearer ${localStorage.uid}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      }).then((res) => res.json());
    }

    static editComment = (data, id) => {
      console.log(data)
      console.log(`${url + "/" + id}`)
      return fetch(`${url + "/" + id}`, {
          method: "PUT",
          headers: {
                authorization: `Bearer ${localStorage.uid}`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      }).then((res) => res.json());
    }

    static deleteComment = (id) => {
      return fetch(`${url + "/" + id}`, {
          method: "DELETE",
          headers: {
                authorization: `Bearer ${localStorage.uid}`,
              "Content-Type": "application/json",
          },
      }).then((res) => res.json());
    }
}

export default Comments