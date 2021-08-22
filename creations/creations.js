function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-items");
  li = ul.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("search")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.querySelector('.toggle').addEventListener('click',() => {
    document.querySelector('.search-field').classList.add('search-appear')
});
document.querySelector('.closecross').addEventListener('click',() => {
    document.querySelector('.search-field').classList.remove('search-appear')
});

window.addEventListener('load',() => {
    document.querySelector('.preloader').style.transform = 'translateY(-100vh)'
});
