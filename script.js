
function validateForm() {
    // TODO: Add checks here.

  const form = document.forms['pet-info-form'];

    
  const bordetella = document.getElementById('bordetella').checked;
  const dhlpp = document.getElementById('dhlpp').checked;
  const rabies = document.getElementById('rabies').checked;

  if(!(bordetella&&dhlpp&&rabies)  && (document.getElementById('vaccination-text-area').value == '')){
    document.getElementById('vaccs-info').innerHTML = "Please specify vaccination explanation below.";
    return false;
  }

  return true;
}


