import axios from 'axios';
export  class StackExchangeConnecter{
 protected async readJsonFromUrl(url : string) {
        var result;
        try {
            const response = await axios.get(url);
            // console.log(response);
            result = response.data
            // console.log(response);
          } catch (error) {
            console.error(error);
          }
        return result;
    }


}