import jwt from 'jsonwebtoken';

export const authorize = async (req, res, next) => {
	const authHeader = req.header('Authorization')
	if (!authHeader)
		return res.status(401).json({ message: "Authorization key not found" })

	try {
		const token = authHeader.split(' ')[1];
		const payload = await jwt.verify(token, process.env.JWT_SECRET);	
		if (payload) {
			req.user = payload;
			return next();
		}
	} catch (e) {
		return res.status(401).json({ message: "Not authenticated" })
	}
	return res.status(401).json({ message: "Not authenticated" })
};
