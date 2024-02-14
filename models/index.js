import fs from "fs";
import { basename, dirname, join, } from "path";
import Sequelize from "sequelize";
import { fileURLToPath } from 'url';
import database from "../config/config.json" assert { type: "json" };


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const baseName = basename(__filename)

const db = {};
const sequelize = new Sequelize(database.development);


  fs.readdirSync(__dirname)
  .filter(file => {
    return ( 
      file.indexOf('.') !== 0 &&
      file !== baseName &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(async file => {
    const filePath = join(__dirname, file);
  var fileBaseName = basename(filePath);
  const fileBaseNamePath = `./${fileBaseName}`;
  
  const model =  ( await import(fileBaseNamePath)).default(sequelize, Sequelize.DataTypes);
  console.log(typeof model.name);
  console.log((await import(fileBaseNamePath)).default);
  db[model.name] = model;
  });


  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

export default db



