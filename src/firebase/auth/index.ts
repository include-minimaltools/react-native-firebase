import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth } from "../core/config";

const AuthErrors: Dictionary<string, string> = {
  "auth/wrong-password": "Contraseña incorrecta",
  "auth/user-not-found": "Usuario no encontrado",
  "auth/too-many-requests": "Demasiados intentos fallidos",
  "auth/user-disabled": "Usuario deshabilitado",
  "auth/invalid-email": "Email inválido",
  "auth/email-already-in-use": "Email ya en uso",
  "auth/weak-password": "Contraseña débil",
  "auth/network-request-failed": "Error de red",
  "auth/internal-error": "Error interno",
  "auth/invalid-api-key": "Clave API inválida",
  "auth/invalid-user-token": "Token de usuario inválido",
  "auth/invalid-credential": "Credencial inválida",
  "auth/invalid-verification-code": "Código de verificación inválido",
  "auth/invalid-verification-id": "ID de verificación inválido",
  "auth/invalid-phone-number": "Número de teléfono inválido",
  "auth/invalid-recipient": "Destinatario inválido",
  "auth/invalid-sender": "Remitente inválido",
};

class AuthService {
  static auth = auth;

  static async signUp(email: string, password: string) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if(!user)
        throw new Error("El usuario no ha sido creado");

      return user;
    } catch (error: any) {
      throw new Error(AuthErrors[error.code]);
    }
  }

  static async signIn(email: string, password: string): Promise<User> {
    try {
      const { user } = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error: any) {
      if (error.code in AuthErrors) throw new Error(AuthErrors[error.code]);
      throw error;
    }
  }

  static async signInWithGoogle() {
    try {
      const { user } = await signInWithPopup(
        this.auth,
        new GoogleAuthProvider()
      );
      return user;
    } catch (error: any) {
      if (error.code in AuthErrors) throw new Error(AuthErrors[error.code]);
      throw error;
    }
  }

  static async signOut() {
    await this.auth.signOut();
  }
}

export { AuthService };

// const Errors: Dictionary<string, string> = {
//   "auth/wrong-password": "Wrong password",
//   "auth/user-not-found": "User not found",
//   "auth/too-many-requests": "Too many requests",
//   "auth/user-disabled": "User disabled",
//   "auth/invalid-email": "Invalid email",
//   "auth/email-already-in-use": "Email already in use",
//   "auth/weak-password": "Weak password",
//   "auth/network-request-failed": "Network request failed",
//   "auth/internal-error": "Internal error",
//   "auth/invalid-api-key": "Invalid API key",
//   "auth/invalid-user-token": "Invalid user token",
//   "auth/invalid-credential": "Invalid credential",
//   "auth/invalid-verification-code": "Invalid verification code",
//   "auth/invalid-verification-id": "Invalid verification ID",
//   "auth/invalid-phone-number": "Invalid phone number",
//   "auth/invalid-recipient": "Invalid recipient",
//   "auth/invalid-sender": "Invalid sender",
// };
