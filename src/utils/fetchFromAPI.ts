const BASE_URL = 'https://yt-api.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a5fc93dcf3mshe49da2ce8d6dcc1p16c51cjsnc29b60f2fac9',
		'x-rapidapi-host': 'yt-api.p.rapidapi.com'
	}
};


export const fetchFromApi = async (url: string)=>{
    try {
        const response = await fetch(`${BASE_URL}/${url}`, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
    
}

