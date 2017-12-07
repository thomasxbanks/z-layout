const xhttp = new XMLHttpRequest()
const template = (person) => {
  return `
    <article>
      <img src="${person.picture.large}">
      <div class="content">
        ${person.name.first} ${person.name.last}
        <br><br>
        <a href="${person.email}">${person.email}</a>
      </div>
    </article>
  `
}

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let people = JSON.parse(this.responseText).results
    people.forEach((person) => {
      document.querySelector('main').innerHTML += template(person)
    })
  }
}
xhttp.open('GET', 'https://randomuser.me/api/?results=50', true)
xhttp.send()