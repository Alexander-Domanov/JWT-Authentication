import expressAsyncHandler from 'express-async-handler'
export const authUser = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:'Auth User'})
})