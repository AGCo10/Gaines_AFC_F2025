// This is a tool to test useContext

import axios from "axios";
import type {Present} from "./Present.ts"
export const getPresents = async () : Promise<Present[]> => {
    const result = await axios.get('/api/widget');
    console.log(result.data);
    return result.data;
}
