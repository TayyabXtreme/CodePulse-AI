const exporess=require('express');
const router=exporess.Router();
const aiController=require('../controllers/ai.controller');

router.get('/get-response', aiController.getResponse);


router.get('/', (req, res) => {
  res.send('AI Routes are working!');
});



module.exports=router;