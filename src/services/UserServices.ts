import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entities/User";
import jwt from 'jsonwebtoken';

export class UserService {
    // private signifie que c'est que pour cette classe
    private userRepository = AppDataSource.getRepository(User);

    async getAll() {
        console.log("UserService - GetAll");
        return this.userRepository.find();
    }

    async getById(id: number) {
        console.log("UserService - GetById");
        return this.userRepository.findOneBy({ id: id });
    }

    async signup(name:string, firstname: string, email: string, password: string, phone: string) {
        console.log("UserService - Sign up");

        // Vérifiez si un utilisateur avec cet email existe déjà
        const existingUser = await this.userRepository.findOneBy({ email: email });
        if (existingUser) {
            console.log("UserService - Email already exists");
            return { message: "Email already exists" }; 
        }
        
        // hasher le mot de passe
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

    //  Methode de login
  async login(email: string, password: string) {
        // on recupere le user
        const user = await this.userRepository.findOneBy({email: email});

        // je verifie si user existe
        if(!user) {
            return { message: "Your email or password are incorrect" }; 
        }

        // fonction compare va crypter le password recu et le comparer avec celui en base
        const isPasswordValid = await bcrypt.compare(password, user.password!);

        if(!isPasswordValid) {
            return { message: "Your email or password are incorrect" }; 
        }

        // Générerer un token, on envoie un payload avec id et email, on envoit notre clé et il expire dans 1h
        //verify signature c'est le password
        // methode sign pour créer un token avec la technologie JWT
        const token = jwt.sign({
        id: user.id, email: user.email},
        process.env.JWT_SECRET!, 
        {expiresIn: "2h"});

        this.userRepository.save(user);
        // on renvoit le token si email et password ok
        // ce token contient des infos sur notre user
        return token;

    }

    // Se déconnecter
    async logout() {

    }

    // modifier password
    async updatePassword(email: string, newPassword: string){
        console.log("UserService - Modify password");

        // Récupérer l'utilisateur par son email
        const user = await this.userRepository.findOneBy({ email });
        if (!user) {
            console.log("No user found with this email:", email);
            return { error: true, message: "User not found" };
        }

        // Hasher le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Mettre à jour le mot de passe de l'utilisateur
        console.log("Before update: ", user.email);
        user.password = hashedPassword;
        console.log("After update: ", user.email);

        // Sauvegarder l'utilisateur mis à jour
        await this.userRepository.save(user);
        return { message: "Password updated successfully" };
        
    }

    // supprimer compte
    async delete(id: string) {
        console.log("UserService - Delete");
        return this.userRepository.delete(id);
    }
}