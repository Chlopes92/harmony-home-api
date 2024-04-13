import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userController = new UserController();
const userRouter = Router();

// Récuperer la liste des users
userRouter.get("/", (req, res) => {
    console.log('UserRouter - GetAll');
    userController.display(req, res);
});

userRouter.get("/:id", (req, res) => {
    console.log("UserRouter - GetById");
    userController.getById(req, res);
});

// créer un compte - CREATE du CRUD
userRouter.post( "/signup", (req, res) => {
    console.log('UserRouter - Sign up');
    userController.signup(req, res);
});

// connexion
userRouter.post( "/login", ( req, res )=>{
    console.log("userRouter - Login");
    userController.login( req, res );
});

// se déconnecter
userRouter.post("/logout", (req, res)=>{
    console.log("userRouter - Logout");
    userController.logout(req,res);
});

// modifier password
userRouter.patch("/:id", (req, res) => {
    console.log("UserRouter - Modify Password");
    userController.updatePassword(req, res);
});

// supprimer son compte 
userRouter.delete("/:id", (req, res) => {
    console.log('UserRouter - Delete Account')
    userController.deleteAccount(req, res);
});

export default userRouter;