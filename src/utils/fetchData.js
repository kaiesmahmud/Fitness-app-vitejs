export const url = 'https://exercisedb.p.rapidapi.com/exercises'

export const exerciseOptions = {
    method: 'GET',
    headers: {
    //   'X-RapidAPI-Key': window.process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key': '659c0cca67msh3a104163ebc3bc3p16d4fbjsn4ba1b4071db3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async ( url, options ) => {
    const data  = await fetch(url, options).then(res=> res.json())
    
    return data ;
}