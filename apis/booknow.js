import axios from "axios";

export async function getBookNowData(){
    const response = await axios.get(`${process.env.BACKEND_URL}/api/book-now?populate=*`);
    const result = response?.data?.data?.attributes;
    return result;
}
