import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [imageUrl,setUrl]=useState('');
  const [mname,setMname]=useState('');
  const [mdesc,setDesc]=useState('')
 const [useremail,setUser]=useState('');
 const [upassword,setUPassword]=useState('')

  return (
    <DataContext.Provider
      value={{
        imageUrl,
        setUrl,
        mname,
        setMname,
        mdesc,
        setDesc,
        useremail,
        setUser,
        upassword,
        setUPassword
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}