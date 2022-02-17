const url = 'http://localhost:4000/api/v1/';

class Reaction {
  static reaction = (data) => {
    return fetch(`${url}/reactions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.uid}`
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
  }
}

export default Reaction