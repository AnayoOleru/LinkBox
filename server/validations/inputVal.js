const inputs = {
   /**
   * iswhitespace helper method
   * @param {string} email
   * @param {string} password
   * @returns {Boolean} True or False 
   */
  isWhiteSpace(email, password) {
    if(email.includes(' ')) return false;
    if(password.includes(' ')) return false;
    return true;
},
     /**
	 * @description allow only alphabets and spaces
	 * @param {string} name
	 * @returns boolean
	 */
  isName(name) {
    return (/^[A-Za-z\s]+$/.test(name));
   },
    /**
	 * @description check if string is digit
	 * @param {string} string
	 * @returns boolean
	 */
  isURL(string) {
    return (/https?:\/\/[^\s]+/.test(string));
  }
}
export default inputs;