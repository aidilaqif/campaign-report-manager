import axios from "axios";

async function getDetail() {
    try {
        const response = await axios.get("https://xxcss3l4v6.execute-api.ap-southeast-1.amazonaws.com/default/creators_detail", {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (e) {
        console.log(`An error occurred: ${e.toString()}`);
    }
}

export { getDetail };
