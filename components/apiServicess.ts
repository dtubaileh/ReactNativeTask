import axios from 'axios';

export interface IUser {
    userId: number
    id: number
    title: string
    body: string
}

class Api {
    private baseURL: string

    constructor() {
        this.baseURL = "https://jsonplaceholder.typicode.com/posts"
    }

    getAllUsers = (): Promise<IUser[]> => {
        return new Promise((resolve, reject) => {
            axios.get<IUser[]>(this.baseURL)
                .then((response) => {
                    console.log("getAllUsers", response)
                    resolve(response.data)
                })
                .catch((error: any) => {
                    // handle error
                    console.log(error);
                    reject(error)
                })
        })
    }

    //   updateUser = (user:IUser): Promise<IUser[]> => {
    //     return new Promise((resolve, reject) => {
    //         axios.put<IUser[]>(`https://jsonplaceholder.typicode.com/posts/${user.id}`,{
    //             ...user
    //         })
    //             .then((response) => {
    //                 console.log("updateUser",response)
    //                 resolve(response.data)
    //             })
    //             .catch((error: any) => {
    //                 // handle error
    //                 console.log(error);
    //                 reject(error)
    //             })
    //     })
    // }


}

// Singleton instance of the API for convenience
export const api = new Api()