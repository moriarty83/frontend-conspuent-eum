const url = 'https://outtapocket-backend.herokuapp.com/api/v1/';

class User {
  static register = (data) => {
      console.log("running register")
    return fetch(`${url}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static login = (data) => {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  static profile = (data) => {
    return fetch(`${url}/profile`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.uid}`,
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
  }; 

  static userUpdate = (data) => {
    return fetch(`${url}/profile`, {
        // credentials: "include",
        method: 'PUT',
        headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(data)
        }).then((res) => res.json());
    }
}

export default User;