function index() {
    command('stackpasta.search');
    command('extension.vscexpressclose', 'login.html');
  }

function Login(){
  userID = $('#userID').val();
  password = $('#password').val();
  DatabaseURL = $('#DatabaseURL').val();
  command('stackpasta.login',userID,password,DatabaseURL);
}