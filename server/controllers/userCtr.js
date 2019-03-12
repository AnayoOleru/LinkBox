import models from '../models';
import Token from '../helpers/jwt';
import HashPassword from '../helpers/jwt';

const { User } = models;

const UserContr = {
/**
 * 
 */
async createUser(req, res) {
    const { username, profession, password, confirmPassword } = req.body;
    try {
      const isUsername = await User.findOne({
        where: {
          username: username
        }
      });
      if (isUsername) {
        return res.status(404).send({ sucsess: false, message: `${username} already in use` });
      }

    //   const hash = await bcrypt.hash(password, parseInt(saltRounds, 10));
  const hashPassword = HashPassword.hashPassword(password);

    console.log('*****', User);
      await User.create({
        username: username,
        profession: profession,
        password: hashPassword,
        confirmPassword: confirmPassword
      });

      const userToken = { username: username }

      const token = Token.generateToken(userToken);
    console.log('*****', );
      return res.status(201).header('x-auth-token', token).json({
        success: true, 
        message: 'User succesfully created',
        token: token,
        username: username,
        profession: profession
      });
    } catch (error) {
        console.log(error);
      res.status(400).send(error);
    }
},
/**
 * 
 */
async loginUser(req, res) {
    const { username, password } = req.body;
    try {
        await User
        .findOne({
          where:
        { password: password }
        });
        const userToken = { username: username }
        Token.generateToken(userToken);
        return res.status(202).send({
            // token: createToken(user.id, user.username),
            message: `Welcome back ${username}`
          });
        } catch(error) {
            res.status(400).send(error);
        }
    },
/**
 * 
 */
async logoutUser(req, res) {
}
};
export default UserContr;
