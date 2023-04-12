// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import product from "@/models/product"
import connectdb from "@/middleware/mongoose"

const handler = async (req, res)=>{

    if(req.method=='POST')
    {
        for (let i=0; i<req.body.length; i++)
        {
        let p = new product({
            title: req.body[i].title,
            slug: req.body[i].slug,
            desc: req.body[i].desc,
            category: req.body[i].category,
            availableQty: req.body[i].availableQty,
            img: req.body[i].img   
        })
        await p.save()
 }
 res.status(200).json({ success: "success " })
 console.log(res)
}
    else{
        res.status(400).json({ error: "This is not allowed " })
    }
}

export default connectdb(handler)

  