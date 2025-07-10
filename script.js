async function fetchData() {
  //   const options = {
  //     method: 'GET',
  //     // headers: {
  //     //   'X-RapidAPI-Key': '[INSERT API KEY]',
  //     //   'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com',
  //     // },
  //   };

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  //   const res = fetch('https://jsonplaceholder.typicode.com/posts', options);
  //   const record = await res.json();

  //   document.getElementById('concerts').innerHTML = record.data
  //     .map((item) => `<li>${item.name}</li>`)
  //     .join('');
}
fetchData();

console.log('in extension');
