import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NewFormData {
  name: string;
  email: string;
  startDate: string;
  endDate: string;
  comment: string;
}

type FormDraftStore = {
  draft: NewFormData;
  setDraft: (form: NewFormData) => void;
  clearDraft: () => void;
};

const initialDraft: NewFormData = {
  name: '',
  email: '',
  startDate: '',
  endDate: '',
  comment: '',
};

export const useFormDraftStore = create<FormDraftStore>()(
  persist(
    set => ({
      draft: initialDraft,
      setDraft: form => set(() => ({ draft: form })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: 'form-draft',
      partialize: state => ({ draft: state.draft }),
    }
  )
);
