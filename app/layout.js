import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Nabvar from "@/components/Nabvar";
import ProtectedRoute from "@/components/ProtectedRoute";
import Alert from "@/components/Alert";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Club Events",
  description: "A Place where you will know about the upcoming 'Events' ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <ProtectedRoute>
            <Nabvar />
            {children}
            <Footer/>
            <Alert />
            <Loading />
          </ProtectedRoute>
        </AuthContextProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </body>
    </html>
  );
}
