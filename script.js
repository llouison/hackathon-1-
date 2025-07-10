async function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // iterate through data
      data.forEach((e) => {
        const resultItem = document.createElement('li');
        document.getElementById('resultsContainer')?.appendChild(resultItem);
        resultItem.classList.add('resultItem');
        resultItem.innerText = `video: ${e.title}`;
      });
      return data;
    });
}
fetchData();

console.log('in extension');
