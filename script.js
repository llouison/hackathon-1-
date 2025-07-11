const apiKey = ''; //add your api key

document.getElementById('searchButton').addEventListener('click', (event) => {
  const query = document.getElementById('searchBar').value.toLowerCase();
  fetchData(query);
});

async function fetchData(query) {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&part=snippet&maxResults=50&channelId=UCAU_6P-M2VHKePIpu5736ag&playlistId=PLWrQZnG8l0E5qPeomg7pmAzQF4vTvLnzV`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById('resultsContainer').innerHTML = '';
      const dataItems = data.items;
      dataItems.forEach((e) => {
        if (e.snippet.title.toLowerCase().indexOf(query) > -1) {
          const resultItem = document.createElement('li');
          document.getElementById('resultsContainer')?.appendChild(resultItem);
          resultItem.classList.add('resultItem');
          //access thumbnail at snippet.thumbnails.medium.url add image element
          resultItem.innerHTML = `<img src="${e.snippet.thumbnails.medium.url}" alt="img" width ="150"><a href="https://www.youtube.com/watch?v=${e.snippet.resourceId.videoId}" target="_blank">${e.snippet.title}</a>`;
        }
      });
      return data;
    });
}

console.log('in extension');
