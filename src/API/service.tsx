import axios from "axios";

 export async function retreiveData() {
    const url = "https://61f5037b62f1e300173c3f8d.mockapi.io/node";
    return axios.get(url).then((res) => {
      return res.data;
    }).catch(err => err);
  }