import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const Token = {
    /**
   * Gnerate Token
   * @param {string} takes every userToken passed in to it
   * @returns {string} token
   */
  generateToken(userToken) {
    const appToken = jwt.sign(
      userToken,
      process.env.SECRET, { expiresIn: '1d' }
    );
    return appToken;
  }
}
export default Token;