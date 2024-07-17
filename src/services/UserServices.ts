import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/User";
import jwt from 'jsonwebtoken';
import { getRepository } from "typeorm";

export class UserService {
    // private signifie que c'est que pour cette classe
    private userRepository = AppDataSource.getRepository(User); // Accès au repository User pour les opérations CRUD.

    async getAll() {
        // Récupère tous les utilisateurs.
        console.log("UserService - GetAll");
        return this.userRepository.find();
    }

    async getById(id: number) {
        // Récupère un utilisateur par son ID.
        console.log("UserService - GetById");
        return this.userRepository.findOneBy({ id: id });
    }

    async signup(name:string, firstname: string, email: string, password: string, phone: string) {
        console.log("UserService - Sign up");
        // Inscription d'un nouvel utilisateur après vérification de l'unicité de l'email.
        const existingUser = await this.userRepository.findOneBy({ email: email });
        if (existingUser) {
            console.log("UserService - Email already exists");
            return { message: "Email already exists" }; 
        }
        
        // Hash du mot de passe pour la sécurité.
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({
            name: name,
            firstname: firstname,
            email : email, 
            password : hashedPassword,
            phone: phone,
        }); 

        return await this.userRepository.save(newUser);
    }


    // Authentification de l'utilisateur.
    async login(email: string, password: string) {
        // On recupere le user
        const user = await this.userRepository.findOneBy({email: email});
        // Je verifie si user existe
        if(!user) {
            return { message: "Your email or password are incorrect" }; 
        }
        // Fonction compare va crypter le password recu et le comparer avec celui en base
        const isPasswordValid = await bcrypt.compare(password, user.password!);
        if(!isPasswordValid) {
            return { message: "Your email or password are incorrect" }; 
        }
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "2h" }
        );
        // Préparer les détails de l'utilisateur à renvoyer
        const userDetails = {
            id: user.id,
            name: user.name,
            firstname: user.firstname,
            email: user.email,
            phone: user.phone
        };
        return { token, user: userDetails };
    }

    // Se déconnecter
    async logout() {

    }

    // Modification du mot de passe de l'utilisateur.
    // async updatePassword(email: string, newPassword: string){
    //     console.log("UserService - Modify password");

    //     // Récupérer l'utilisateur par son email
    //     const user = await this.userRepository.findOneBy({ email });
    //     if (!user) {
    //         console.log("No user found with this email:", email);
    //         return { error: true, message: "User not found" };
    //     }

    //     // Hasher le nouveau mot de passe
    //     const hashedPassword = await bcrypt.hash(newPassword, 10);

    //     // Mettre à jour le mot de passe de l'utilisateur
    //     console.log("Before update: ", user.email);
    //     user.password = hashedPassword;
    //     console.log("After update: ", user.email);

    //     // Sauvegarder l'utilisateur mis à jour
    //     await this.userRepository.save(user);
    //     return { message: "Password updated successfully" };
        
    // }
    async updatePassword(email: string, newPassword: string) {
        console.log("UserService - Modify password");

        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            console.log("No user found with this email:", email);
            return { error: true, message: "User not found" };
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        console.log("Before update: ", user.email);
        user.password = hashedPassword;
        console.log("After update: ", user.email);

        await this.userRepository.save(user);
        return { message: "Password updated successfully" };
    }

    async delete(id: string) {
        console.log("UserService - Delete");
        return this.userRepository.delete(id);
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .getOne();
        return user || null;
    }

}