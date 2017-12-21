class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem("token", token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("admin");
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem("token");
  }

  static getContactToken() {
    var token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWU3ZGMyMTgzOWJhODMyYjRiOTE2NTIiLCJpYXQiOjE1MDkzNDc0NzJ9.q0h3aNOKNCycAQX39CQcM_nb7tDNWOrCYNSud29ka5o";
    return token;
  }

  static setUserRole() {
    return localStorage.setItem("role", role);
  }

  static getUserRole() {
    return localStorage.getItem("role");
  }
}

export default Auth;
