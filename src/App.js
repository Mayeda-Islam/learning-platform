import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFFile from './Others/PDFFile';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
