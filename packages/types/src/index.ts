// Shared TypeScript types for Auto Consult

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'seller' | 'dealer' | 'support' | 'admin' | 'superadmin';
  kycStatus: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
}

export interface CarListing {
  id: string;
  ownerId: string;
  title: string;
  make: string;
  model: string;
  year: number;
  kms: number;
  price: number;
  status: 'draft' | 'published' | 'sold' | 'archived';
  photos: string[];
  documents: string[];
  createdAt: Date;
}

export interface Offer {
  id: string;
  listingId: string;
  buyerId: string;
  message: string;
  amount: number;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface LoanApplication {
  id: string;
  userId: string;
  listingId?: string;
  status: 'pending' | 'approved' | 'rejected';
  lenderResponse?: string;
  documents: string[];
  amountRequested: number;
}

export interface InsurancePolicy {
  id: string;
  userId: string;
  carId: string;
  provider: string;
  policyNumber: string;
  premium: number;
  startDate: Date;
  endDate: Date;
}

export interface Document {
  id: string;
  userId: string;
  type: 'id' | 'rc' | 'insurance' | 'other';
  s3Key: string;
  verifiedBy?: string;
  verifiedAt?: Date;
}