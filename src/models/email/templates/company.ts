import THEME from '@/styles/css/ts/theme'

const textColor = THEME.colors.red

export default `
<table width="100%">
<tr>
  <td align="center">
    <h2 style="color: ${textColor}; font-weight: bold">
      Quero ser um parceiro
    </h2>
  </td>
</tr>
</table>

<div><b style="color: ${textColor}">Interesse em:</b> #{interest}</div>

<div><b style="color: ${textColor}">Empresa:</b> #{company}</div>
<div><b style="color: ${textColor}">Representante:</b> #{representative}</div>
<div><b style="color: ${textColor}">Email:</b> #{email}</div>
<div><b style="color: ${textColor}">Telefone:</b> #{telephone}</div>


<div>
  <b style="color: ${textColor}">Endereço:</b> 
  #{address}, #{district}, #{city} - #{state}
</div>

<div><b style="color: ${textColor}">Como nos conheceu:</b> #{howDidFind}</div>

<hr />

<pre>#{message}</pre>
`
