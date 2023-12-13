"use server";

import {connectToDB} from "@utils/database";
import Service from "@models/service";

export const SearchResult = async(str) => {
    await connectToDB();
    let searchTerm = `${str}`
    // console.log("search term: ", searchTerm)
   
    let results = await Service.find({
        $or: [
            {
                name: { $regex: new RegExp(searchTerm, 'i') }
            }
        ]
    })
    
    return results
}