function enviar() {
  const inputName = document.getElementById('name')
  const inputSurname = document.getElementById('surname')
  const inputDate = document.getElementById('date')
  console.log('inputName', inputName.value)
  console.log('inputSurname', inputSurname.value)
  console.log('inputDate', inputDate.value)

  /* para não criar o cadastro se as informações forem incompletas*/
  if (!inputName.value || !inputSurname.value || !inputDate.value) {
    return
  }

  let statusDate = ''

  /* diminuir o ano atual pelo ano do nascimento e gerar a idade + resulado de menor/maior de idade*/
  const anoAtual = new Date().getFullYear()

  const yearPerson = new Date(inputDate.value).getFullYear()

  const idadePessoa = anoAtual - yearPerson

  if (idadePessoa >= 18) {
    statusDate = 'Maior de idade'
  } else {
    statusDate = 'Menor de idade'
  }

  const divResult = document.getElementById('result')

  divResult.innerHTML =
    '<h2> Nome: ' +
    inputName.value +
    '</h2>' +
    '<h2> Sobrenome: ' +
    inputSurname.value +
    '</h2>' +
    '<h2> Data de Nascimento: ' +
    inputDate.value +
    '<h2> Idade: ' +
    idadePessoa +
    '</h2>' +
    '<h2> Status: ' +
    statusDate +
    '</h2>'
}
