import axios from "axios";

export async function getApartmentsData(){
    const response = await axios.get(`${process.env.BACKEND_URL}/api/the-apartments-singular?populate=*`);
    const result = response?.data?.data?.attributes;
    return result;
}
