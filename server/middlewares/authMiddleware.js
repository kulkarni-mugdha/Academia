import { clerkClient } from "@clerk/express"

// Middleware ( Protect Educator Routes )
export const protectEducator = async (req,res,next) => {

    try {

        const userId = req.auth?.userId

        if (!userId) {
            return res.json({success:false, message: 'Unauthorized Access'})
        }
        
        const response = await clerkClient.users.getUser(userId)
        const role = response?.publicMetadata?.role
        console.log('protectEducator role:', role, 'userId:', userId)

        if (role !== 'educator') {
            return res.json({success:false, message: 'Unauthorized Access'})
        }
        
        next ()

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}
