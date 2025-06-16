const exporess=require('express');
const router=exporess.Router();
const aiController=require('../controllers/ai.controller');

router.post('/get-review', aiController.getReview);


router.get('/', (req, res) => {
  res.send('AI Routes are working!');
});



module.exports=router;