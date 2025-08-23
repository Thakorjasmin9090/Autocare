// Placeholder for User model
// Will be implemented properly after dependencies are installed

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'seller' | 'dealer' | 'support' | 'admin' | 'superadmin';
  kycStatus: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
}

export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    ...userData,
    createdAt: new Date(),
  };
};