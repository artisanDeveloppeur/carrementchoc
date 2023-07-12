$('.message-devis').hide()
$('#exportForm').hide()
$('#apercu').click(function () {

  $('.message-devis').show()

  let htmlFirstPage = $('#first-page').html()
  let regex = /{{/;
  $('.alert').hide()
  if (regex.test(htmlFirstPage)) {
    $('.alert-danger').show()
    $('.message-devis-danger').text("Attention, il reste des caractères {{}} dans la facture. Merci de vérifier tous les champs obligatoires.")
    //

    if ($('#factureNom').text() == '{{Nom}}') {
      $('.alert-danger').show()
      $('.requiredNom').text("Vous n'avez pas indiquez de nom.")
    } else {
      $('.error.requiredNom').hide()
    }


    if ($('#facturePrenom').text() == '{{Prénom}}') {
      $('.alert-danger').show()
      $('.requiredPrenom').text("Vous n'avez pas indiquez de prénom.")
    } else {
      $('.error.requiredPrenom').hide()
    }

    if ($('#factureAdresse').text() == '{{Adresse}}') {
      $('.alert-danger').show()
      $('.requiredAdresse').text("Vous n'avez pas indiquez d'adresse")
    } else {
      $('.error.requiredAdresse').hide()
    }

    if ($('#factureVille').text() == '{{Ville}}') {
      $('.alert-danger').show()
      $('.requiredVille').text("Vous n'avez pas indiquez de ville")
    } else {
      $('.error.requiredVille').hide()
    }

    if ($('#factureCodePostale').text() == '{{Code postale}}') {
      $('.alert-danger').show()
      $('.requiredCP').text("Vous n'avez pas indiquez de code postale")
    } else {
      $('.error.requiredCP').hide()
    }

    if ($('#facturePays').text() == '{{Pays}}') {
      $('.alert-danger').show()
      $('.requiredPays').text("Vous n'avez pas indiquez de Pays")
    } else {
      $('.error.requiredPays').hide()
    }

    if ($('#factureTelephone').text() == '{{Téléphone}}') {
      $('.alert-danger').show()
      $('.requiredTelephone').text("Vous n'avez pas indiquez de téléphone")
    } else {
      $('.error.requiredTelephone').hide()
    }

    if ($('#factureEmail').text() == '{{Email}}') {
      $('.alert-danger').show()
      $('.requiredEmail').text("Vous n'avez pas indiquez d'email")
    } else {
      $('.error.requiredEmail').hide()
    }

    /*
        if ($('#facture').text() == '{{}}') {
          $('.alert-danger').show()
          $('.required').text("Vous n'avez pas indiquez de ...")
        } else {
          $('.error.required').hide()
        }
    */

    ///
    if ($('#factureFormation').text() == '{{Formation sélectionnée}}') {
      $('.alert-info').show()
      $('.message-devis-info').text("Vous devez choisir une formation précise. (Choix possibles *). Objet / Devis pour la formation : {{Formation sélectionnée}} ")
    } else {

      //
      if ($('#factureParticipant').text() == '{{$PRODUCTQUANTITY$}}') {
        $('.alert-warning').show()
        $('.message-devis-warning').text("Merci d'indiquer le nombre de participants")
      }

      if ($('#factureParticipant').text() == '{{$PRODUCTQUANTITY$}}' && $('#factureProduct').text() == '{{$PRODUCTTOTAL$}}') {
        $('.alert-warning').show()
        $('.message-devis-warning').text("Merci d'indiquer le nombre de participants pour calculer le prix.")
      }
      else {
        $('.alert-warning').hide()
        $('.alert-danger').hide()


        // $('.alert-success').show()
        // $('.message-devis-success').text("Vous pouvez générer le devis")

      }

      //

    }

    // fin else regex
  } else {
    //$('.alert-danger').hide()

    $('.alert-success').show()
    $('#exportForm').show()
    $('.message-devis-success').text("Vous pouvez générer le devis")

  }


  // calcul prix

  let nombreParticpant = $(".quantiteFormations").text()
  let prixFormations = $(".prixFormations").text()

  let montantSansLaTva = eval(nombreParticpant) * eval(prixFormations)
  $('.montantSansLaTva').text(montantSansLaTva)

  let montantTva = (montantSansLaTva * 21) / 100
  $('.montantTva').text(montantTva)

  let montantAvecTva = montantSansLaTva + montantTva
  $('.montantAvecTva').text(montantAvecTva)

  //alert("attention, il reste des caractères spéciaux {{ }}")


});