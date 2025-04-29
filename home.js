const mainFeedPage = [{
  imageName: 'img/Frieren/download.jpeg',
  Username: 'Himel',
  Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
},{
  imageName: 'img/Frieren/download (2).jpg',
  Username: 'Aizen',
  Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
},{
  imageName: 'img/Frieren/Aot season 4.jpg',
  Username: 'Eren Yeager',
  Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
},{
  imageName: 'img/Frieren/download (1).jpg',
  Username: 'Nami San',
  Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
}


];


let feedsPage = '';
mainFeedPage.forEach((feed) => {
  feedsPage += `
    <div class="main-section">
      <div class="userid-more">
          <h2 class="uploaded-username">${feed.Username}</h2>
          <img src="icons/more_horiz_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
      </div>
      <div class="image-container">
          <img src="${feed.imageName}">
      </div>
      <div class="expression">
          <div>
              <img src="icons/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="like-btn"> 
              <img src="icons/comment_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
              <img src="icons/send_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
          </div>
          <div class="bookmark-slot">
              <img src="icons/bookmark_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="bookmark">
              <img src="icons/bookmarks_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="bookmarked-js" style="display: none;">
          </div>
      </div>
      <div class="like-count">
          
      </div>
      <div class="discription">
          <h4>${feed.Username}</h4>
          <p>${feed.Discription}</p>
      </div>
    </div>
  `;
});

const mainFeed = document.querySelector('.main-feed');
mainFeed.innerHTML = feedsPage;


const bookmarkSlots = document.querySelectorAll('.bookmark-slot');
const bookmarks = document.querySelectorAll('.bookmark');
const bookmarkedJs = document.querySelectorAll('.bookmarked-js');

bookmarks.forEach((bookmark, index) => {
  bookmark.addEventListener('click', () => {
    // Hide the clicked bookmark
    bookmark.style.display = 'none';
    
    // Show the corresponding bookmarked-js element
    if (bookmarkedJs[index]) {
      bookmarkedJs[index].style.display = 'flex';
    }
  });
});

bookmarkedJs.forEach((bookmarked, index) => {
  bookmarked.addEventListener('click', () => {
    bookmarked.style.display = 'none';

    if(bookmarks[index]) {
      bookmarks[index].style.display = 'flex';
    }
  })
});

const likeButton = document.querySelectorAll('.like-btn');
const likeCount = document.querySelectorAll('.like-count');
let likeCounting = 0;
likeButton.forEach((like, index) => {
  like.addEventListener('click', () => {
    likeCounting += 1;

    if(likeCount[index]){
      likeCount.innerHTML = likeCounting;
    }
  });
});
