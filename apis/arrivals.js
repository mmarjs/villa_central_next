import axios from "axios";

export async function getArrivalsData(){
    const response = await axios.get(`${process.env.BACKEND_URL}/api/arrival?populate=*`);
    const result = response?.data?.data?.attributes;
    return result;
}
