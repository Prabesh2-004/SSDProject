// const mainFeedPage = [{
//   imageName: 'img/Frieren/download.jpeg',
//   Username: 'Himel',
//   Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
// },{
//   imageName: 'img/Frieren/download (2).jpg',
//   Username: 'Aizen',
//   Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
// },{
//   imageName: 'img/Frieren/Aot season 4.jpg',
//   Username: 'Eren Yeager',
//   Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
// },{
//   imageName: 'img/Frieren/download (1).jpg',
//   Username: 'Nami San',
//   Discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.'
// },{
//   imageName: `img/1346621.jpeg`,
//   Username: `Frieren`,
//   Discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.`
// }


// ];


// let feedsPage = '';
// mainFeedPage.forEach((feed) => {
//   feedsPage += `
//     <div class="main-section">
//       <div class="userid-more">
//           <h2 class="uploaded-username">${feed.Username}</h2>
//           <img src="icons/more_horiz_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
//       </div>
//       <div class="image-container">
//           <img src="${feed.imageName}">
//       </div>
//       <div class="expression">
//           <div>
//               <img src="icons/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="like-btn"> 
//               <img src="icons/comment_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
//               <img src="icons/send_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
//           </div>
//           <div class="bookmark-slot">
//               <img src="icons/bookmark_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="bookmark">
//               <img src="icons/bookmarks_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" class="bookmarked-js" style="display: none;">
//           </div>
//       </div>
//       <div class="like-count">
          
//       </div>
//       <div class="discription">
//           <h4>${feed.Username}</h4>
//           <p>${feed.Discription}</p>
//       </div>
//     </div>
//   `;
// });

// const mainFeed = document.querySelector('.main-feed');
// mainFeed.innerHTML = feedsPage;


// const bookmarkSlots = document.querySelectorAll('.bookmark-slot');
// const bookmarks = document.querySelectorAll('.bookmark');
// const bookmarkedJs = document.querySelectorAll('.bookmarked-js');

// bookmarks.forEach((bookmark, index) => {
//   bookmark.addEventListener('click', () => {
//     // Hide the clicked bookmark
//     bookmark.style.display = 'none';
    
//     // Show the corresponding bookmarked-js element
//     if (bookmarkedJs[index]) {
//       bookmarkedJs[index].style.display = 'flex';
//     }
//   });
// });

// bookmarkedJs.forEach((bookmarked, index) => {
//   bookmarked.addEventListener('click', () => {
//     bookmarked.style.display = 'none';

//     if(bookmarks[index]) {
//       bookmarks[index].style.display = 'flex';
//     }
//   })
// });

// const likeButton = document.querySelectorAll('.like-btn');
// const likeCount = document.querySelectorAll('.like-count');
// let likeCounting = 0;
// likeButton.forEach((like, index) => {
//   like.addEventListener('click', () => {
//     const currentCount = parseInt(likeCount[index].textContent, 10) || 0;
//     likeCount[index].textContent = currentCount + 1;
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {

//   const loadImage = document.querySelector('#load-image');
//   const imagePreview = document.querySelector('.image-preview');
//   // const uploadingDetails = document.querySelector('.uploading-details');
  
//   if(!loadImage){
//     console.error('Element with class "load-image" not found');
//     return;
//   }
//   if(!imagePreview){
//     console.error("Element with class 'image-preview' not found");
//     return;
//   }

//   loadImage.addEventListener('change', (event) => {
//     const files = event.target.files;
    
//     if(files.length === 0){
//       alert('No File Selected');
//       return;
//     }
    
//   Array.from(files).forEach((file) => {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const imageObject = {
//         name:file.name,
//         size: file.size,
//         dataUrl: e.target.result,
//         id: Date.now(),
//       };
//       displayImage(imageObject);
//     };
//     reader.readAsDataURL(file);
//   });
//   loadImage.value = '';
// });

// function displayImage(imageObject) {
//   // Create a container for the uploaded image
//   const imageContainer = document.createElement('div');
//   imageContainer.className = 'image-container';

//   // Create the image element
//   const imageItems = document.createElement('img');
//   imageItems.src = imageObject.dataUrl;
//   imageItems.alt = imageObject.name;

//   // Append the image to the container
//   imageContainer.appendChild(imageItems);

//   // Append the image container to the image preview section
//   const imagePreview = document.querySelector('.image-preview');
//   if (imagePreview) {
//     imagePreview.appendChild(imageContainer);
//   } else {
//     console.error('Element with class "image-preview" not found.');
//   }

//   // Create a textarea for the description
//   const textArea = document.createElement('textarea');
//   textArea.className = 'discription';
//   textArea.style.resize = 'none';
//   textArea.style.width = '100%';
//   textArea.style.height = '100px';
//   textArea.placeholder = 'Enter a description...';

//   // Create an upload button
//   const uploadButton = document.createElement('button');
//   uploadButton.classList.add('upload-button');
//   uploadButton.textContent = 'Upload';

//   // Append the textarea and button to the uploading details section
//   const uploadingDetails = document.querySelector('.uploading-details');
//   if (uploadingDetails) {
//     uploadingDetails.appendChild(textArea);
//     uploadingDetails.appendChild(uploadButton);
//   } else {
//     console.error('Element with class "uploading-details" not found.');
//   }

//   uploadButton.addEventListener('click', () => {
//     mainFeedPage.push({
//       imageName: imageObject.name,
//       Username: "User",
//       Discription: textArea.value
//       });
//       console.log("working");
//   });

// }
// });



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
},{
  imageName: `img/1346621.jpeg`,
  Username: `Frieren`,
  Discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore hic quis officiis unde voluptatem illo tenetur harum, velit dolore ipsa! Officiis rem saepe deserunt ducimus voluptas impedit, unde sed.`
}


];

// Function to render feed content
function renderFeed() {
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

  // Reattach event listeners after updating content
  setupBookmarkListeners();
  setupLikeListeners();
}

// Function to set up bookmark listeners
function setupBookmarkListeners() {
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
    });
  });
}

// Function to set up like button listeners
function setupLikeListeners() {
  const likeButton = document.querySelectorAll('.like-btn');
  const likeCount = document.querySelectorAll('.like-count');
  
  likeButton.forEach((like, index) => {
    like.addEventListener('click', () => {
      const currentCount = parseInt(likeCount[index].textContent, 10) || 0;
      likeCount[index].textContent = currentCount + 1;
    });
  });
}

// Initial render
renderFeed();

document.addEventListener('DOMContentLoaded', () => {
  const loadImage = document.querySelector('#load-image');
  const imagePreview = document.querySelector('.image-preview');
  
  if(!loadImage){
    console.error('Element with id "load-image" not found');
    return;
  }
  if(!imagePreview){
    console.error("Element with class 'image-preview' not found");
    return;
  }

  // Clear any existing content in image preview
  imagePreview.innerHTML = '';

  loadImage.addEventListener('change', (event) => {
    const files = event.target.files;
    
    if(files.length === 0){
      alert('No File Selected');
      return;
    }
    
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageObject = {
          name: file.name,
          size: file.size,
          dataUrl: e.target.result,
          id: Date.now(),
        };
        displayImage(imageObject);
      };
      reader.readAsDataURL(file);
    });
    loadImage.value = '';
  });

  function displayImage(imageObject) {
    // Clear previous content
    imagePreview.innerHTML = '';
    
    // Create a container for the uploaded image
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    // Create the image element
    const imageItems = document.createElement('img');
    imageItems.src = imageObject.dataUrl;
    imageItems.alt = imageObject.name;

    // Append the image to the container
    imageContainer.appendChild(imageItems);

    // Append the image container to the image preview section
    imagePreview.appendChild(imageContainer);

    // Create a textarea for the description
    const textArea = document.createElement('textarea');
    textArea.className = 'discription';
    textArea.style.resize = 'none';
    textArea.style.width = '100%';
    textArea.style.height = '100px';
    textArea.placeholder = 'Enter a description...';

    // Create an upload button
    const uploadButton = document.createElement('button');
    uploadButton.classList.add('upload-button');
    uploadButton.textContent = 'Upload';

    // Append the textarea and button to the uploading details section
    const uploadingDetails = document.querySelector('.uploading-details');
    if (uploadingDetails) {
      // Clear previous content
      const existingTextarea = uploadingDetails.querySelector('textarea');
      const existingButton = uploadingDetails.querySelector('button');
      
      if (existingTextarea) {
        uploadingDetails.removeChild(existingTextarea);
      }
      if (existingButton) {
        uploadingDetails.removeChild(existingButton);
      }
      
      uploadingDetails.appendChild(textArea);
      uploadingDetails.appendChild(uploadButton);
    } else {
      console.error('Element with class "uploading-details" not found.');
      return;
    }

    uploadButton.addEventListener('click', () => {
      // Fix: Add Username property when adding a new post
      mainFeedPage.push({
        imageName: imageObject.dataUrl, 
        Username: "You", // Default username for uploaded content
        Discription: textArea.value
      });
      
      // Re-render the feed to show the new post
      renderFeed();
      
      // Clear the upload area
      imagePreview.innerHTML = '';
      textArea.value = '';
      
      // Optional: Scroll to the top to see the new post
      window.scrollTo(0, 0);
    });
  }
});