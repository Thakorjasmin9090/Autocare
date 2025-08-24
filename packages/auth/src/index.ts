// Authentication utilities and components for Auto Consult

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Hash a password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Compare a password with its hash
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

// Generate a JWT token
export const generateToken = (payload: object, secret: string, expiresIn: string | number): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

// Verify a JWT token
export const verifyToken = (token: string, secret: string): any => {
  return jwt.verify(token, secret);
};

// Authentication interface
export interface AuthCredentials {
  email: string;
  password: string;
}

// User interface
export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin' | 'superadmin';
  createdAt: Date;
}