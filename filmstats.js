const actors1 = createObjWithActors(actorsWithoutDirectorOscar)
const actorNames = Object.keys(actors1)
const avgAges = actorNames.reduce((sumAge, name) => sumAge + actors1[name], 0) / actorNames.length
console.log(`1) ${avgAges.toFixed(0)}`)

const actors2 = createObjWithActors(actorsPlayWithTom)
console.log(`2) ${Object.keys(actors2).join(', ')}`)

const filmsNoTomAndDirectorLess70 = films.filter(
  (film) => !film.actors.some((actor) => actor.name === 'Tom Hanks') && film.director.age < 70
)
const budget = filmsNoTomAndDirectorLess70.reduce((b, film) => b + parseInt(film.budget.slice(1)), 0)
console.log(`3) $${budget} 000 000`)


function createObjWithActors(func) {
  //обьект автоматически избавит от дублирования актеров
  return films
  .reduce((actors, film) => func(actors, film), {})
}
function actorsWithoutDirectorOscar(actors, film) {
  if (film.director && film.director.oscarsCount < 1) {
    film.actors.forEach((actor) => actors[actor.name] = actor.age)
  }
  return actors
}
function actorsPlayWithTom(actors, film) {
  if(film.actors.some((actor) => actor.name === 'Tom Hanks') && film.creationYear > 1995) {
    film.actors.forEach((actor) => {if (actor.name !== 'Tom Hanks') { actors[actor.name] = actor.age}} )
  }
  return actors
}

