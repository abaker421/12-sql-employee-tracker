const router= require('express').Router()
const connection= require('../db/connection')

router.post('/', async (req,res)=> {
   
    const {var1, var2} = req.body

    try{   
        const result= await connection.promise().query(
        `INSERT INTO  (value_1, value_2) VALUES (?,?);`,
        [var1, var2]
    ) 
    res.json(result)

    }catch(err){
        res.status(500)
    }

})

router.get('/', async (req,res)=> {

    try{   
        const result= await connection.promise().query(`SELECT * FROM ;`)

    res.json(result)

    }catch(err){
        res.status(500)
    }

})

router.delete('./:id', async (req,res)=> {
    const id= req.params.id

    try {   
        const result= await connection.promise().query(`DELETE FROM  WHERE id= ?;`,
        id,
    )

    res.json(result)

    } catch(err){
        res.status(500)
    }

})

router.put('/:id', async (req,res)=> {

    const id= req.params.id
    const {var1, var2} = req.body

    try {   
        const result= await connection.promise().query(`UPDATE 
        SET var1 = ?,var2=? ,var3=?, var4=?, var5=?  
        WHERE ID=?;`,
        [var1, var2, var3, var4, var5, id],
    )

    res.json(result)

    } catch(err){
        res.status(500)
    }
})

module.exports = router