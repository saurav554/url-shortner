const Url=require('../models/url')

module.exports.list=(req,res)=>{
    Url.find()
    .then((urls)=>{
        res.json(urls)
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports.create=(req,res)=>{
    const body=req.body
    const shorthash=new Url(body)
    shorthash.save()
        .then((urls)=>{
            res.json(urls)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Url.findByid(id)
    .then((urls)=>{
        res.json(urls)
    })
    .catch((err)=>{
        res.json(err)
    })

}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Url.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((urls)=>{
            res.json(urls)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Url.findByIdAndDelete(id)
    .then((urls)=>{
        res.json(urls)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.redirect=(req,res)=>{
    const hash=req.params.hash
    const data=req.useragent
    const click={
        ipAddress:req.ip,
        browser:data.browser,
        platform:data.platform,
        device:data.device?'Mobile': 'Desktop'
    }
    
    Url.findOneAndUpdate({hashedUrl:hash},{$push:{clicks:click}},{new:true,runValidators:true})
        .then((url)=>{
            res.redirect(url.originalUrl)
            console.log(url)
        })
        .catch((err)=>{
            res.json(err)
        })
}

