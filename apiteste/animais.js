module.exports = (app) => {
    //rota para listar animais
   app.get('/animais', (req, res) => {
    db.collection('animais').find().toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   });
   }
   
   