import models from '../models';
import inputVal from '../validations/inputVal';
import passwordVal from '../validations/passwordVal';
// import Link from '../models/link';

const { Link } = models;

const LinkContr = {
/**
 * 
 */
async createLink(req, res) {
    // console.log('reached');
    try{
       const { title, link, tag} = req.body;
       if(!title || !link || !tag){
         return res.status(400).send({
           status: 400,
           error: 'Some values are missing'
         })
       }
      //  whitespace
       if(!inputVal.isWhiteSpace(title, link, tag)) {
        return res.status(400).send({ 
            status: 400, 
            error: "White Space are not allowed in input fields" 
        });

       }
      //  title must not be a number
      if(!inputVal.isName(title, tag)) {
        return res.status(400).send({ 
            status: 400, 
            error: "Title or Tag must only be Alphabets, spaces are allowed" 
        });
      }
      // link must be link
      if(!inputVal.isURL(link)){
        return res.status(400).send({ 
          status: 400, 
          error: "Links must be http links(format)" 
      });
    }
        // console.log(req.body.title);
        // console.log(req.body.link);
        // console.log(req.body.tags);
        Link.create({
            title,
            link,
            tag
        });
        console.log('3');
        return res.status(201).send({
            success: true,
            message: `${req.body.title} succesfully created`,
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
        res.status(400).send({
          status: 400,
          message: error
        });
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
    } catch (error){
      res.status(400).send({
        status: 400,
        message: error
      });
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
          res.status(400).send({
            status: 400,
            message: error
          });
        }
    },
};
export default LinkContr;
