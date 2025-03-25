import { Link } from "react-router-dom";
import {
    HiArrowUturnLeft,
    HiOutlinePencilSquare,
    HiOutlineUser,
    HiOutlineUserCircle,
} from "react-icons/hi2";

import { useUser } from "../../context/AuthContext";
import SettingItem from "./SettingItem";

const AccountSettings = () => {
    const {
        user: { id: userId },
    } = useUser();

    return (
        <div className="w-full">
            <h1 className="text-3xl text-center mb-12">Settings</h1>

            <div className="max-w-xl mx-auto p-5 bg-dark-2 rounded-md">
                <div className="flex items-center justify-between">
                    <Link to={-1} className="flex items-center gap-2.5 text-primary-blue">
                        <HiArrowUturnLeft />
                        Back
                    </Link>
                    <p className="flex items-center gap-2.5">
                        <HiOutlineUser />
                        Account
                    </p>
                </div>

                <ul className="flex flex-col mt-8 gap-4">
                    <SettingItem
                        icon={HiOutlineUserCircle}
                        label="Account Page"
                        link={`/profile/${userId}`}
                    />

                    <SettingItem
                        icon={HiOutlinePencilSquare}
                        label="Edit Account"
                        link={`/edit-profile/${userId}`}
                    />
                </ul>
            </div>
        </div>
    );
};

export default AccountSettings;