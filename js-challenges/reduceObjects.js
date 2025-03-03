const url = "https://api.github.com/users/briankvin/repos?per_page=100"

const fetchRepo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const {language} = repo;
    if (language) {
      total[language] = total[language] + 1 || 1
    }
    return total
  }, {})
  console.log(newData)
}
fetchRepo()