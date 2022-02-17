const url = 'https://outtapocket-backend.herokuapp.com/api/v1/reactions';

class Reactions {
  static reaction = (data) => {
    return fetch(`${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.uid}`
        },
        body: JSON.stringify(data),
    }).then((res) => 
    {console.log(res.json())
      res.json()});
  }
}

export default Reactions