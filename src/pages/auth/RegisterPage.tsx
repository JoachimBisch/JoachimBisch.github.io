import React from 'react';
import { AuthForm } from '../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Créer un compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-black hover:text-gray-900"
            >
              connectez-vous à votre compte
            </button>
          </p>
        </div>

        <AuthForm mode="register" onSuccess={() => navigate('/dashboard')} />
      </div>
    </div>
  );
};