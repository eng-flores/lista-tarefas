const baseUrl = 'http://localhost:3000'

const criar = async (conteudo) => {
  const url = `${baseUrl}/tarefas`
  return await axios.post(url, conteudo)
}

const getElement = async () => {
  let conteudo = document.getElementById("tarefa").value
  const lista = { tarefa: conteudo }
  return await criar(lista)
}