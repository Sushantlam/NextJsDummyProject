// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import product from "@/models/product"
import connectdb from "@/middleware/mongoose"

const handler = async (req, res)=>{
 if(req.method=='POST')
 {  console.log(req.body)
        for (let i=0; i<req.body.length; i++)
        {
       let p= await product.findByIdAndUpdate(req.body[i]._id, req.body[i])
 }
 res.status(200).json({ success: "success " })
}
    else{
        res.status(400).json({ error: "This is not allowed " })
    }
}

export default connectdb(handler)

  