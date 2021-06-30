import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username, password)
  {
    return true;
    // Soumettre les identifiants au service de login (http://localhost:8081/api/login - POST) > doLogin
    // Login est valide
      // Enregistrer en session (SessionStorage) le token de l'utilisateur
      // On informe l'appellant que l'utilisateur est authentifié et qu'il faut le rediriger sur la page appropriée
    // Login n'est pas valide
      // Informer l'appellant que l'utilisateur n'est pas authentifié
  }

  doLogin(username, password)
  {
    // Fait l'appel au service distant 
    // Va récupérer le token si login valide
    // Retourner l'info à l'appellant (login)
  }

  isUserLoggedIn()
  {
    // Récupérer le token dans le session storage (s'il y en a un)
    // Si token, alors on considère l'utilisateur comme étant authentifié
    // Sinon non
  }

  logout()
  {
    // On efface le token dans le session storage
    // On confirme le logout au composant appellant qui devra rediriger l'utilisateur sur la page appropriée 
  }
}
