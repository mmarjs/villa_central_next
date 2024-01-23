import axios from "axios";

export async function getHomeData(){
    const response = await axios.get(`${process.env.BACKEND_URL}/api/home?populate=*`);
    const result = response?.data?.data?.attributes;
    return result;
}
