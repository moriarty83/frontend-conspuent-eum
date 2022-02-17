const url = 'http://localhost:4000/api/v1/';

class User {
  static register = (data) => {
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