const apiKey = '0dec92d5f1524d669c33ef6805889683'; // Replace with your NewsAPI key
const url = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const newsFeed = document.getElementById('newsFeed');
        if (data.articles.length > 0) {
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article'); // Add class for styling
                articleElement.innerHTML = `
                    <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="Article Image">
                    <div class="news-content">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
                `;
                newsFeed.appendChild(articleElement);
            });
        } else {
            newsFeed.innerHTML = '<p>No news articles found.</p>';
        }
    })
    .catch(error => console.error('Error fetching news:', error));