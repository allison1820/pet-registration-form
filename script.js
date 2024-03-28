function validateForm() {
    // TODO: Add checks here.

  const form = document.forms['pet-info-form'];

    
  const bordetella = form['bordetella'].checked;
  const dhlpp = form['dhlpp'].checked;
  const rabies = form['rabies'].checked;

  if(!(bordetella&&dhlpp&&rabies) && (document.getElementById('other-info-text-area').value != '')){
    document.getElementById('vaccs').style.color = 'red'
    return false;
  }



  return true;
}
