app.get('/testerota', function (req,res){
    var v1 = req.query.n1;
    var v2 = req.query.n2;
    var v3 = parseInt(v1) - parseInt(v2);
      res.render(dirname+'/testerota.html',{printa: v3});
  })
  
  app.post("/testerota", function(req,res){
    var a = req.body.n1;
    var b = req.body.n2;
    var v3 = parseInt(a) + parseInt(b)  
    res.render(dirname+'/testerota.html',{printa: v3});
  })