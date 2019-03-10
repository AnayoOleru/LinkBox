import 'sequelize';
import Link from '../models/link';

const LinkContr = {
/**
 * 
 */
async createLink(req, res) {
    console.log('reached');
    try{
        // const { title, link, tags} = req.body;
        console.log(req.body.title);
        console.log(req.body.link);
        console.log(req.body.tags);
        Link.create({
            title: req.body.title,
            link: req.body.link,
            tags: req.body.tags
        });
        console.log('3');
        return res.status(201).send({
            success: true,
            message: 'contact succesfully created',
          });
    } catch(error) {
        res.status(400).send(error);
    }
    },
/**
 * 
 */
async getAllLink(req, res) {
    const { id } = req.decoded;
    try {
        await Link.findAll({
          where: {
            userId: id
          }
        });
        return res.status(201).send({
            message: 'Get all Links successful'
        });
      } catch (error) {
        res.status(400).send(error);
      }
},
/**
 * 
 */
async editLink(req, res) {
    const { title, link, tag } = req.body;
    const { linkId } = req.params;
    try{
    await Link.findOne({ where: { id: linkId, userId: req.decoded.id } });

    const updatedLink = await Link.update(
        { title, link, tag }, {
          where: {
            id: linkId
          }
        }
      );
      return res.status(201).send({
          message: 'Sucessfully Updated',
          updatedLink
      });
    } catch (error) {
        res.status(400).send(error);
  } 
  },
/**
 * 
 */
async deleteLink(req, res) {
        const { linkId } = req.params;
        try {
          const singleLink = await Link.findOne({ where: { id: linkId } });
          if (singleLink) {
            if (singleLink.userId === req.decoded.id) {
              singleLink.destroy();
             
              return res.status(202).send({
                  message: 'Successfully Deleted',
              });
            }
            return res.status(403).send({
                message: 'You don\'t have permision to perform such action',
            });
          }
          return res.status(404).send({
            message: `Link with id - ${linkId} not found`,
        });
        } catch (error) {
            res.status(400).send(error);
        }
    },
};
export default LinkContr;
