import axios from "axios";

const API_BASE_URL = "https://your-api.com";


const getApiData = async (url, params = {}, headers = {}) => {
    console.log('url is', url)
    console.log('header is', headers)
    try {
        const response = await axios.get(url, {
            params,
            headers,
            timeout: 10000, // Set timeout to 10 seconds (10000 ms)
        });
        console.log('param is', params)
        console.log('param is', headers)
        return response.data;
    } catch (error) {
        console.error("error message :");
        if (axios.isCancel(error)) {
            console.error("Request was canceled:", error.message);
        } else if (error.code === "ECONNABORTED") {
            console.error("Request Timeout: API took too long to respond");
            return { error: "Request Timeout: API took too long to respond" };
        } else {
            console.error("API Error:", error.message);
            return { error: error.message };
        }
    }
};

const postApiData = async (url, params = {}, headers = {}) => {
    try {
        const response = await axios.post(url, params, { headers });
        return response;
    } catch (error) {
        console.error("error message :");
        if (axios.isCancel(error)) {
            console.error("Request was canceled:", error.message);
        } else if (error.code === "ECONNABORTED") {
            console.error("Request Timeout: API took too long to respond");
            return { error: "Request Timeout: API took too long to respond" };
        } else {
            console.error("API Error:", error.message);
            return { error: error.message };
        }
    }
};

const uploadImage = async (url, imageuri, headers, param) => {
    const formdata = new FormData();

    formdata.append("image", {
        uri: imageuri,// Local path of file
        name: "upload.jpg", //file name you have to set
        type: "image/jpeg", //Mine type
    });

    Object.keys(param).forEach((key) => {
        formdata.append(key, param[key]);
    })

    try {
        const response = await axios.post(url, formdata, {
            headers: headers
        });
        return response.data;
    } catch (error) {
        console.error("error message :");
        if (axios.isCancel(error)) {
            console.error("Request was canceled:", error.message);
        } else if (error.code === "ECONNABORTED") {
            console.error("Request Timeout: API took too long to respond");
            return { error: "Request Timeout: API took too long to respond" };
        } else {
            console.error("API Error:", error.message);
            return { error: error.message };
        }
    }
};

const putData = async (url, params = {}, headers = {}) => {
    try {
        const response = await axios.put(url, params, { headers });
        return response;
    } catch (error) {
        console.error("error message :");
        if (axios.isCancel(error)) {
            console.error("Request was canceled:", error.message);
        } else if (error.code === "ECONNABORTED") {
            console.error("Request Timeout: API took too long to respond");
            return { error: "Request Timeout: API took too long to respond" };
        } else {
            console.error("API Error:", error.message);
            return { error: error.message };
        }
    }
};

const deleteData = async (url, params = {}, headers = {}) => {
    try {
        const response = await axios.delete(url, params, { headers });
        return response;
    } catch (error) {
        console.error("error message :");
        if (axios.isCancel(error)) {
            console.error("Request was canceled:", error.message);
        } else if (error.code === "ECONNABORTED") {
            console.error("Request Timeout: API took too long to respond");
            return { error: "Request Timeout: API took too long to respond" };
        } else {
            console.error("API Error:", error.message);
            return { error: error.message };
        }
    }
};
export { getApiData, postApiData, uploadImage,putData,deleteData };


// const API_BASE_URL = "https://your-api.com"; // Replace with actual API URL

// // Create an axios instance
// const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     timeout: 10000, // 10 seconds timeout
//     headers: {
//         "Content-Type": "multipart/form-data",
//         "Content-Type": "application/json",
//     },
// });

// // GET Request
// const getApiData = async (url, params = {}, headers = {}) => {
//     // console.log("URL is:", `${API_BASE_URL}${endpoint}`);
//     // console.log("Params are:", params);

//     try {
//         const response = await apiClient.get(url, { params, headers });
//         return response.data;
//     } catch (error) { 
//         handleApiError(error);
//     }
// };

// // POST Request
// const postApiData = async (endpoint, data = {}, headers = {}) => {
//     console.log("URL is:", `${API_BASE_URL}${endpoint}`);
//     console.log("Body Data is:", data);

//     try {
//         const response = await apiClient.post(endpoint, data, { headers });
//         return response.data;
//     } catch (error) {
//         handleApiError(error);
//     }
// };

// // Error Handling Function
// const handleApiError = (error) => {
//     if (axios.isCancel(error)) {
//         console.error("Request was canceled:", error.message);
//     } else if (error.code === "ECONNABORTED") {
//         console.error("Request Timeout: API took too long to respond");
//     } else {
//         console.error("API Error:", error.message);
//     }
//     throw error; // Re-throw error to handle it in calling function
// };

// export { getApiData, postApiData };
