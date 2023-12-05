const initializeAxiosInstance = async (url) => {
    try {
        console.error("url",url)
        let resp = await axios.get(url, {withCredentials: true});
        console.log(resp);
        document.getElementById("get-request-full-response").innerHTML = JSON.stringify(resp);

        let csrfToken = parseCSRFToken(resp);
        console.log(csrfToken);
        document.getElementById("get-response-csrf-token").innerHTML = csrfToken;

        return axios.create({
            // withCredentials must be true to in order for the browser
            // to send cookies, which are necessary for CSRF verification
            withCredentials: true,
            headers: {"X-CSRF-Token": csrfToken}
        });
    } catch (err) {
        console.log(err);
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function example() {
    console.log('Start');
    await sleep(5000); // sleep for 1000 milliseconds (1 second)
    console.log('End');
  }
  

const post = async (axiosInstance, url) => {
    try {
        
        console.log("sleep")
        example();
        console.log("sleep1 ")
        example();
        console.log("sleep 1.1")
        example();
        console.log("sleep1 2")


        let resp = await axiosInstance.post(url);

        console.log(resp);
        document.getElementById("post-request-full-response").innerHTML = JSON.stringify(resp);
    } catch (err) {
        console.log(err);
    }
};

// general-purpose func to deal with clients like Axios,
// which lowercase all headers received from the server response
const parseCSRFToken = (resp) => {
    let csrfToken = resp.headers[csrfTokenHeader];
    if (!csrfToken) {
        csrfToken = resp.headers[csrfTokenHeader.toLowerCase()];
    }
    return csrfToken
}

const urlGetss = "http://localhost:8080/api";
const urlPost = "http://localhost:8081/api";
const csrfTokenHeader = "X-CSRF-Token";


initializeAxiosInstance(urlGetss)
    .then(axiosInstance => {
        post(axiosInstance, urlPost);
    });



console.log("111111")