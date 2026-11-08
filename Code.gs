function sendAutoReply(e) {
  var candidateName = e.values[1]; 
  var candidateEmail = e.values[2]; 
  
  var subject = "Application Received - HireSmart";
  var message = "Hi " + candidateName + ",\n\nThank you for applying to HireSmart! We have successfully received your application. Our HR team will review your profile and get back to you soon.\n\nBest Regards,\nHireSmart HR Team";
  
  MailApp.sendEmail(candidateEmail, subject, message);
}
