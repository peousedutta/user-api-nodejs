export const fetch = async(req, res) =>{
    try {
        res.json("Hello World")
    } catch (err) {
        res.status(500).json({error: "Internal Server Error"})
    }
}