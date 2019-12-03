const data=require('./src/mock/mock.js')

module.exports={
    devServer:{
        before(app){
            app.get('/getdata',(req,res)=>{
                res.send(data)
            })
        }
    }
}