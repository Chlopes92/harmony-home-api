import { Router } from "express";
import { UserController } from "../controllers/UserControllers";

const userController = new UserController(); // Crée une instance du UserController.
const userRouter = Router();

// Route pour récupérer tous les utilisateurs. -> READ du CRUD
userRouter.get("/", (req, res) => {
    console.log('UserRouter - GetAll');
    userController.display(req, res); // Appelle la méthode display de userController pour traiter la requête.
});

// Route pour récupérer un utilisateur par son ID.
userRouter.get("/:id", (req, res) => {
    console.log("UserRouter - GetById");
    userController.getById(req, res); // Appelle la méthode getById de userController.
});

// Route pour créer un nouveau compte utilisateur. -> CREATE du CRUD
userRouter.post( "/signup", (req, res) => {
    console.log('UserRouter - Sign up');
    userController.signup(req, res); // Appelle la méthode signup pour enregistrer un nouvel utilisateur.
});

// Route pour la connexion d'un utilisateur.
userRouter.post( "/login", ( req, res )=>{
    console.log("userRouter - Login");
    userController.login( req, res ); // Appelle la méthode login de userController.
});

// Route pour la déconnexion d'un utilisateur.
userRouter.post("/logout", (req, res)=>{
    console.log("userRouter - Logout");
    userController.logout(req,res);
});

// Route pour modifier le mot de passe d'un utilisateur. -> UPDATE du CRUD
userRouter.patch("/:id", (req, res) => {
    console.log("UserRouter - Modify Password");
    userController.updatePassword(req, res); // Appelle la méthode updatePassword de userController.
});

// Route pour supprimer un compte utilisateur. -> DELETE du CRUD
userRouter.delete("/:id", (req, res) => {
    console.log('UserRouter - Delete Account')
    userController.deleteAccount(req, res); // Appelle la méthode deleteAccount de userController.
});

userRouter.post('/request-password-reset', (req, res) => {
    userController.requestPasswordReset(req, res);
});

userRouter.patch('/reset-password', (req, res) => {
    userController.resetPassword(req, res);
});

export default userRouter;