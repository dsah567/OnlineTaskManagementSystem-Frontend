import axios from "axios";

export async function isLoginLoader(){
    try {
        let isLoggedIn,Data;
        await axios.get("/api/v1/users/isloggedin")
            .then((res) => {
                        isLoggedIn = res.status
                        Data = res.data.data
                        console.log("Utils",res.data.data) })
            .catch((err) => {
                console.log(err);
                console.log("isLoginLoader error")
            })
        if (isLoggedIn === 200) {
            return Data;
        }
        return null
    } catch (error) {
        console.log("uti error",error);
        return null
    }
}