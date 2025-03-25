import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineBell,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldExclamation,
  HiOutlineUser,
} from "react-icons/hi2";

import { useLogoutAccount } from "../../lib/react-query/queriesAndMutations";

import SettingItem from "../../components/ui/SettingItem";

const Settings = () => {
  const navigate = useNavigate();
  const { mutate: logoutAccount, isSuccess } = useLogoutAccount();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess, navigate]);

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center mb-12">Settings</h1>

      <ul className="flex flex-col gap-4 max-w-xl mx-auto text-2xl">
      <SettingItem
           icon={HiOutlineUser}
           label="Account"
           link="/settings/account"
         />
         <SettingItem
           icon={HiOutlineBell}
           label="Notifications"
           link="/settings/notifications"
         />
         <SettingItem
           icon={HiOutlineShieldExclamation}
           label="Privacy Policy"
           link="/settings/privacy"
         />
         <SettingItem
           icon={HiOutlineQuestionMarkCircle}
           label="Support"
           link="/settings/support"
         />
         <SettingItem
           icon={HiOutlineArrowRightStartOnRectangle}
           label="Logout"
           textClass="text-danger-1"
           iconBgClass="bg-danger-1-opacity-30"
           onClick={logoutAccount}
         />
      </ul>
    </div>
  );
};

export default Settings;