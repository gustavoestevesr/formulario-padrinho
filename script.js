function googlesheets(){

    var nome = document.getElementById('fnome')
    var email = document.getElementById('femail')
    var telefone = document.getElementById('ftel')
    var candidatos = document.getElementById('fcandidatos')

    var url = ''

    if ( nome.value.length == 0 ) {
        alert( 'Preencher o campo Nome Completo' )
    }else if ( email.value.length == 0 ) {
        alert( 'Preencher o campo Email' )
    } else if ( telefone.value.length == 0 ) {
        alert( 'Preencher o campo Telefone' )
    }else if ( candidatos.value.length == 0 ) {
        alert( 'Preencher o campo Candidatos' )
    }else{
        url = `https://docs.google.com/forms/d/e/1FAIpQLSdehR1MfEb8ezQrEEwH047f3MQSJ9NC8dTI-xTH03vlCZF3Nw/formResponse?entry.288291952=${nome.value}&entry.1398277623=${email.value}&entry.17087396=${telefone.value}&entry.627194152=${candidatos.value}`
        location.href = url
        alert('Formulário enviado com sucesso!')
    }

    /*planilha google sheets
    https://docs.google.com/spreadsheets/d/1inYRwP8BS2NawhUtgqUPNQKdNS9av3RjrX1QjQeAqf0/edit?usp=sharing
    */

}