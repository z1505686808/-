const Mock=require('mockjs');

let data=Mock.mock({
    "data|5":[
        {
            "id|+1":1,
            "name":'@cname',
            "age|10-20":12,

        }
    ]
})

module.exports={data}