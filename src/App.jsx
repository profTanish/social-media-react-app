import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryProvider } from "./lib/react-query/QueryProvider";
import { AuthProvider } from "./context/AuthContext";

import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import {
  Explore,
  Home,
  Profile,
  Profiles,
  Saved,
  Settings,
  PostDetails,
  EditProfile,
} from "./_root/pages";
import AccountSettings from "./components/ui/AccountSettings";
import NotificationsSettings from "./components/ui/NotificationsSettings";
import PrivacyPolicy from "./components/ui/PrivacyPolicy";

const App = () => {
  return (
    <main>
      <QueryProvider>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/sign-up" element={<SignupForm />} />
              </Route>

              <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/edit-profile/:id" element={<EditProfile />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings/account" element={<AccountSettings />} />
                <Route
                   path="/settings/notifications"
                   element={<NotificationsSettings />}
                 />
                 <Route path="/settings/privacy" element={<PrivacyPolicy />} />
                 <Route path="/settings/account" element={<AccountSettings />} />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24xp",
            backgroundColor: "#1E1E23",
            color: "#F9FAFD",
          },
        }}
      />
    </main>
  );
};
export default App;