import THEME from '@/styles/css/ts/theme'

const textColor = THEME.colors.orange

export default `
<table width="100%">
<tr>
  <td align="center">
    <h2 style="color: ${textColor}; font-weight: bold">
      Cadastro de currículo
    </h2>
  </td>
</tr>
</table>

<div><b style="color: ${textColor}">Tipo de vaga pretendida:</b> #{vacancyType}</div>

<div><b style="color: ${textColor}">Nome:</b> #{name}</div>
<div><b style="color: ${textColor}">Sexo:</b> #{sex}</div>
<div><b style="color: ${textColor}">Data de nascimento:</b> #{birthDate}</div>
<div><b style="color: ${textColor}">Email:</b> #{email}</div>
<div><b style="color: ${textColor}">Telefone:</b> #{telephone}</div>


<div>
  <b style="color: ${textColor}">Endereço:</b> 
  #{address}, #{city} - #{state}, #{cep}
</div>
<div><b style="color: ${textColor}">Complemento:</b> #{complement}</div>

`
