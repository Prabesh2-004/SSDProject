const bookmarkSlot = document.querySelectorAll('.bookmark-slot');
const bookmark = document.querySelectorALL('.bookmark');
const bookmarkedJs = document.querySelectorAll('.bookmarked-js');

bookmark.forEach((bookmarks) => {
 bookmarks.addEventListener('click', () => {
  bookmarkedJs.style.display = 'inline';
  bookmark.style.display = 'none';
 })
})

bookmarkedJs.addEventListener('click', () => {
  bookmark.style.display = 'inline';
  bookmarkedJs.style.display = 'none';
})