import axios from "axios";

async function getContentCreator() {
    try {
        const response = await axios.get("https://qeceshgpw1.execute-api.ap-southeast-1.amazonaws.com/default/crm-get-creators", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    } catch (e) {
        console.log(`An error occured : ${e.toString()}`)
    }
}
// const response = await fetch("https://jpdewfhwo9.execute-api.ap-southeast-1.amazonaws.com/default/crm-get-creators")
// console.log(response)
export { getContentCreator }