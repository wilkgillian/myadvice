import { createSlice } from '@reduxjs/toolkit';

interface AddMedicalProps {
  data: {
    name: string;
    description: string;
  };
}

export function addMedical({ data }: AddMedicalProps) {
  const dados = {
    consultas: [data]
  };
  localStorage.setItem('consultas', JSON.stringify(dados));
}

// export const medicalSlice = createSlice({
//   name: 'medicals',
//   initialState: {
//     value: {
//       name: '',
//       crm: 0
//     }
//   },
//   reducers: {
//     addMedical: (state, data) => {
//       state.value = {
//         name: data.name,
//         crm: data.crm
//       };
//     }
//   }
// });

// export const { addMedical } = medicalSlice.actions;

// export default medicalSlice.reducer;
