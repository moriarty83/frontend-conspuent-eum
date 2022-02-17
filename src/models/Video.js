const url = 'http://localhost:4000/api/v1/videos';

class Video {

  static videoIndex = () => {
    return fetch(`${url}`).then((res) => res.json());
  }; 

  static videoShow = (id) => {
    return fetch (`${url}/${id}`).then(res => res.json());
  };

}

export default Video;