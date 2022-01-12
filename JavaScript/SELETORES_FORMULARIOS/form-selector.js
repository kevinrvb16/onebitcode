function showinfo() {
    let name = document.querySelector("input[name='name']").value;
    let favoriteColor = document.querySelector("select[name='color'] option:checked").textContent
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOptions.forEach( element => { optionsValue.push( element.value)})
    let optionsChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\n" +
    "Conhecimentos em programação Web: " + optionsChecked)
}