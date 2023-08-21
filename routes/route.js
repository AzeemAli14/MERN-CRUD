import express from "express";
import  {addUser, getUsers}  from "../controllers/user-controller.js";

const router = express.Router();

// const test = (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
// }

// router.get('/', test);

router.post('/add', addUser);
router.get('/all', getUsers);

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//     res.send('Hello World!');
// })

export default router;