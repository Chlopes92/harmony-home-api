import { Request, Response } from "express";
import { UserService } from "../services/UserServices";
export class UserController {

    // Instanciation du UserService en l'assigniant à la propriété userService de la classe UserController.
    // Cette instance est accessible uniquement dans cette classe.
    private userService =  new UserService();

    // Récupère et affiche tous les utilisateurs.
    async display(req: Request, res: Response) {
        console.log("UserController - GetAll");
        const users = await this.userService.getAll();
        res.send({status: "OK", data: users});
    }

    // Récupère un utilisateur par son ID.
    async getById(req: Request, res: Response) {
        console.log("UserController - GetByID");
        const user = await this.userService.getById(Number(req.params.id));
        if (!user){
            return res.status(404).send({ status: 'error', message: `This user not exist` });
        } else {
            res.send({status: "OK", data: user});
        }
        
        
    }

    // Inscrit un nouvel utilisateur.
    async signup(req: Request, res: Response) {
        console.log("UserController - Sign Up");
 
        const name = req.body.name;
        const firstname = req.body.firstname;
        const email = req.body.email;
        const password = req.body.password;
        const phone = req.body.phone;
        const createUser = await this.userService.signup(name, firstname, email, password, phone);

        if (createUser) {
            res.status(201).json({status:"OK", message: "User created" });
        }else{
            res.status(409).json({ message: "You Failed !"});
        }
           
    }

    // Vérifier le mail, password et génerer le token.
    async login(req: Request, res: Response) {
        console.log("UserController - Login")
        const email = req.body.email;
        const password = req.body.password;

        // le service va verifier que email existe et password associé aussi, génére le token et le renvoie
        const token = await this.userService.login(email, password);

        if(token) {
            res.status(200).json({ email: email, token: token });
        } else {
            res.status(401).json({ message: "Invalid Email or Password!" });
        }

    }

    // Se déconnecter
    async logout(req: Request, res:Response){
        console.log("UserController - Logout");
        res.status(200).send({status: "OK", message: "Logged out successfully" });
    }

    // Met à jour le mot de passe d'un utilisateur.
    async updatePassword(req: Request, res: Response) {
        console.log("UserController - Modify Password");
        const { email, password } = req.body;
    
        // Appeler le service pour mettre à jour le mot de passe
        const newPassword = await this.userService.updatePassword(email, password);
    
        // Vérifier si une erreur a été retournée par le service
        if (newPassword.error) {
            console.log(newPassword.message); // Pour débogage
            return res.status(404).json({ status: "Error", message: "User not found" });
        }
    
        // Si tout va bien, envoyer une réponse de succès
        res.json({ status: "OK", message: "Password changed successfully" });
    }

     // Supprimer le compte de l'user.
     async deleteAccount(req:Request, res :Response){
        console.log("UserController - Delete Account")
        const user = await this.userService.delete(req.params.id);
        res.status(200).send({ message: "Account delete" });
    }
}