async function addTask() {
  document.querySelector("#add-button").addEventListener('click', function() {
    let newItem = document.createElement('li')
    newItem.textContent = document.querySelector("#search-bar").value
    document.querySelector('ul').appendChild(newItem)
  })
}