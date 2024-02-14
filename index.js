import express from 'express';
import router from './router/router.js';
import bodyParser from 'body-parser';
import db from './models/index.js';

const PORT = 3300;

const app = express();
app.listen(PORT, () => {
  console.log('done');
}); 
db.sequelize.sync({force: true, }).then(res=>{
  })
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
const start =  () => {
 
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/', router);

};



start();
