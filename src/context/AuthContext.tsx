import { createContext } from 'react';
import { User } from '../types/types';

export interface AuthContextProp {
  initialized: boolean;
  user: User | null;
  signup: (email: string, passowrd: string, name: string) => Promise<void>;
  processingSignup: boolean;
}

const AuthContext = createContext<AuthContextProp>({
  initialized: false,
  user: null,
  signup: async () => {},
  processingSignup: false,
});

export default AuthContext;
