import { createSlice } from '@reduxjs/toolkit';

interface AddMedicalProps {
  data: {
    name: string;
    description: string;
  };
}

export async function addConsult({ data }: AddMedicalProps) {
  let consults: [] = [];
  let consult = [];
  if (localStorage.consultas) {
    consults = await JSON.parse(localStorage.consultas);
    //Parei aqui
  }
  const dados = {
    name: data.name,
    description: data.description
  };
  consult.push(dados);
  localStorage.setItem('consultas', JSON.stringify(consults.push(consult)));
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
