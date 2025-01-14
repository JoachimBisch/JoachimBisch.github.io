import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { ExperienceForm } from './ExperienceForm';

interface CreateExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const CreateExperienceModal: React.FC<CreateExperienceModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Create New Experience
              </h3>

              <ExperienceForm 
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};