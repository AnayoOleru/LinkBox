import 'sequelize';
import { User }from '../models';
// import sequelize from '../../sequelize';

const UserContr = {
/**
 * 
 */
async createUser(req, res) {
    const { username, profession, password, confirmPassword } = req.body;
    try {
    //   const isUsername = await User.findone({
    //     where: {
    //       username: username
    //     }
    //   });
    //   if (isUsername) {
    //     return res.status(404).send({ sucsess: false, message: 'Username already in use' });
    //   }
    //   const hash = await bcrypt.hash(password, parseInt(saltRounds, 10));
    console.log(req.body.username);
      await User.create({
        username: username,
        profession: profession,
        password: password,
        confirmPassword: confirmPassword
      });
      return res.status(201).send({
        success: true, message: 'User succesfully created'
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
