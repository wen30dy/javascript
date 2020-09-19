const fetchData=async (searchTerm)=>{
    const response= await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey: 'ba909a98',
            s:searchTerm
        }
    });
    if (response.data.Error){
        return [];
    }
    return response.data.Search;
};
const root=document.querySelector('.autocomplete');
root.innerHTML=`
    <label><b>search for a movie</b> </label>
    <input class="input" type="text">
    <div class="dropdown is-active">
        <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
        </div>
    </div>
`;
const input=document.querySelector('input');
const dropdown=document.querySelector('.dropdown');
const resultsWapper=document.querySelector('.results');

const onInput=async event=>{
    const movies=await fetchData(event.target.value);
    
    for (let movie of movies){
        const div=document.createElement('div');
        div.innerHTML=`
            <img src="${movie.Poster}"/>
            <h1>${movie.Title}</h1>
        `;

        document.querySelector('#target').appendChild(div);
    }
}
// const onInput=event=>{
//     if(timeOutid){
//         clearTimeout(timeOutid);
//     }
//     timeOutid=setTimeout(()=>{
//         fetchData(event.target.value);
//     },1000)
// }
input.addEventListener('input',debounce(onInput,500));
