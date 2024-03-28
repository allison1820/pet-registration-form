function validateForm() {
    // TODO: Add checks here.

  const form = document.forms['pet-info-form'];
  
  const bordetella = form['bordetella'].checked;
  const dhlpp = form['dhlpp'].checked;
  const rabies = form['rabies'].checked;

  if(!(bordetella&&dhlpp&&rabies))
    return false;

  return true;
}
