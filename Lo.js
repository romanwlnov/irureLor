function removePosterById(id) {
    posters = posters.filter(poster => poster.id !== id);
}

// Example usage:
removePosterById(1);
console.log(posters);
// Output: [{ id: 2, title: 'Second Poster' }]
